import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import MENU_ITEMS from '../../../common/variables/menuItems';
import MENU_ITEMS_LOGIN from '../../../common/variables/menuItemLogin';
import Popup from '../../popup';
import Menu from '../../Menu';
import Search from './Search';
import Button from '../../control/Button';
import icons from '../../../assets/icons';
import PopupHandleLogin from './../../popup/PopupHandleLogin';
import PopupHandleRegister from './../../popup/PopupHandleRegister';

import styles from './Header.module.scss';

function Header() {
  const [showPopupLogin, setShowPopupLogin] = useState(false);
  const [showPopupRegister, setShowPopupRegister] = useState(false);

  // Check login
  const isLogin = false;

  // Handle menu login
  const handleChange = (menuItem) => {
    console.log(menuItem);
  };

  // Handle Login
  const handleLogin = () => {
    setShowPopupLogin(true);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src={icons.logo} alt="logo" />
              </a>
            </Link>
          </div>

          <Search />

          <div className={styles.actions}>
            {isLogin ? (
              <div className={styles.headerLogin}>
                <Button href="upload" leftIcon={<FontAwesomeIcon icon={faPlus} />} outline2>
                  Tải lên
                </Button>

                <Tippy content="Tin nhắn">
                  <button className={styles.iconMessage}>
                    <Image src={icons.message} alt="icon" />
                  </button>
                </Tippy>

                <Tippy content="Hộp thư">
                  <button className={styles.iconMail}>
                    <Image src={icons.mail} alt="icon" />
                  </button>
                </Tippy>

                <Menu items={MENU_ITEMS_LOGIN} onChange={handleChange}>
                  <div className={styles.avatar}>
                    <Image src={icons.avatar} alt="avatar" layout="fill" />
                  </div>
                </Menu>
              </div>
            ) : (
              <>
                <Button href="/upload" text>
                  Tải lên
                </Button>
                <Button primary onClick={handleLogin}>
                  Đăng nhập
                </Button>

                <Menu items={MENU_ITEMS} onChange={handleChange}>
                  <div className={styles.iconDots}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </Menu>
              </>
            )}
          </div>
        </div>
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

export default Header;
