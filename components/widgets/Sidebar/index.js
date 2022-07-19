import React, { Fragment, useState } from 'react';
import NavLink from './NavLink';

import Popup from '../../popup';
import PopupHandleLogin from '../../popup/PopupHandleLogin';
import PopupHandleRegister from '../../popup/PopupHandleRegister';
import FollowingAccounts from './FollowingAccounts';
import RecommendedAccount from './RecommendedAccount';
import styles from './Sidebar.module.scss';
import Button from '../../control/Button';

function SideBar() {
  const [showPopupLogin, setShowPopupLogin] = useState(false);
  const [showPopupRegister, setShowPopupRegister] = useState(false);

  // Check Login
  const isLogin = false;

  return (
    <Fragment>
      <div className={styles.sideBar}>
        <NavLink />

        {!isLogin && (
          <div className={styles.login}>
            <p className={styles.des}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button className={styles.btnLogin} outline onClick={() => setShowPopupLogin(true)}>
              Đăng nhập
            </Button>
          </div>
        )}

        <div className={styles.recommendedAccount}>
          <p className={styles.title}>Tài khoản được đề xuất</p>
          <RecommendedAccount />
        </div>

        <div className={styles.line}></div>

        {isLogin && (
          <div className={styles.followingAccounts}>
            <p className={styles.title}>Tài khoản đang theo dõi</p>
            <FollowingAccounts />
          </div>
        )}
      </div>

      {/* Popup Login */}
      <Popup onClose={() => setShowPopupLogin(false)} open={showPopupLogin}>
        <PopupHandleLogin
          onClosePopupLogin={() => setShowPopupLogin(false)}
          onOpenPopupRegister={() => setShowPopupRegister(true)}
        />
      </Popup>

      {/* Popup Register */}
      <Popup onClose={() => setShowPopupRegister(false)} open={showPopupRegister}>
        <PopupHandleRegister
          onClosePopupRegister={() => setShowPopupRegister(false)}
          onOpenPopupLogin={() => setShowPopupLogin(true)}
        />
      </Popup>
    </Fragment>
  );
}

export default SideBar;
