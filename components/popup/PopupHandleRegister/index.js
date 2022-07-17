import React, { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { IoCloseOutline } from 'react-icons/io5';

import icons from '../../../assets/icons';

import styles from './PopupHandleRegister.module.scss';

function PopupHandleRegister({ onClosePopupRegister, onOpenPopupLogin }) {
  // handle login
  const handleLogin = () => {
    onClosePopupRegister();
    onOpenPopupLogin();
  };

  return (
    <Fragment>
      <Head>
        <title>Đăng kí</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h3 className={styles.title}>Đăng ký TikTok</h3>

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

        <div className={styles.policy}>
          <p className={styles.text}>
            Bằng cách tiếp tục, bạn đồng ý với<a href="#"> Điều khoản Sử dụng</a>
            của TikTok và xác nhận rằng bạn đã đọc hiểu<a href="#">Chính sách Quyền riêng tư</a>của TikTok.
          </p>
        </div>

        <div className={styles.register}>
          <p className={styles.text}>Bạn đã có tài khoản?</p>
          <p className={styles.link} onClick={handleLogin}>
            Đăng nhập
          </p>
        </div>

        <div className={styles.iconClose} onClick={onClosePopupRegister}>
          <IoCloseOutline />
        </div>
      </div>
    </Fragment>
  );
}

export default PopupHandleRegister;