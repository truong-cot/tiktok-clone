import React from 'react';
import Image from 'next/image';
import { IoCloseOutline } from 'react-icons/io5';

import icons from '../../../assets/icons';

import styles from './PopupHandleLogin.module.scss';

function PopupHandleLogin({ onClosePopupLogin }) {
  // handle register
  const handleRegister = () => {
    // hide popup login
    onClosePopupLogin();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Đăng nhập vào TikTok</h3>

      <div className={styles.listOption}>
        <div className={styles.option}>
          <div className={styles.icon}>
            <Image src={icons.iconUser} alt="facebook" layout="fill" />
          </div>
          <p className={styles.text}>Số điện thoại / Email / TikTok ID</p>
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <Image src={icons.iconFacebook} alt="facebook" layout="fill" />
          </div>
          <p className={styles.text}>Tiếp tục với Facebook</p>
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <Image src={icons.iconGoogle} alt="Google" layout="fill" />
          </div>
          <p className={styles.text}>Tiếp tục với Google</p>
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <Image src={icons.iconInstagram} alt="Instagram" layout="fill" />
          </div>
          <p className={styles.text}>Tiếp tục với Instagram</p>
        </div>

        <div className={styles.option}>
          <div className={styles.icon}>
            <Image src={icons.iconApple} alt="iconApple" layout="fill" />
          </div>
          <p className={styles.text}>Tiếp tục với Apple</p>
        </div>
      </div>

      <div className={styles.register}>
        <p className={styles.text}>Bạn không có tài khoản?</p>
        <p className={styles.link} onClick={handleRegister}>
          Đăng kí
        </p>
      </div>

      <div className={styles.iconClose} onClick={onClosePopupLogin}>
        <IoCloseOutline />
      </div>
    </div>
  );
}

export default PopupHandleLogin;
