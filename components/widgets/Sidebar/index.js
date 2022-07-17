import React, { Fragment, useState } from 'react';
import NavLink from './NavLink';

import Popup from '../../popup';
import PopupHandleLogin from '../../popup/PopupHandleLogin';
import FollowingAccounts from './FollowingAccounts';
import RecommendedAccount from './RecommendedAccount';
import styles from './Sidebar.module.scss';
import Button from '../../control/Button';

function SideBar() {
  const [showPopupLogin, setShowPopupLogin] = useState(false);

  // Check Login
  const isLogin = true;

  return (
    <Fragment>
      <div className={styles.sideBar}>
        <NavLink />

        {!isLogin && <div className={styles.line}></div>}

        {isLogin && (
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

        <div className={styles.followingAccounts}>
          <p className={styles.title}>Tài khoản đang theo dõi</p>
          <FollowingAccounts />
        </div>
      </div>

      <Popup onClose={() => setShowPopupLogin(false)} open={showPopupLogin}>
        <PopupHandleLogin onClosePopupLogin={() => setShowPopupLogin(false)} />
      </Popup>
    </Fragment>
  );
}

export default SideBar;
