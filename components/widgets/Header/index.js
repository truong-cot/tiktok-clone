import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAsia,
  faQuestion,
  faKeyboard,
  faPlus,
  faUser,
  faGear,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import Menu from '../../Menu';
import Search from './Search';
import Button from '../../control/Button';
import images from '../../../assets/images';
import styles from './Header.module.scss';

function Header() {
  // Check login
  const isLogin = true;

  // Handle login item
  const handleChange = (menuItem) => {
    console.log(menuItem);
  };

  // Khai bao menu chưa đăng nhập
  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Ngôn ngữ',
        data: [
          {
            type: 'language', // handle theo type
            code: 'vi',
            title: 'Tiếng việt',
          },
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      title: 'Phản hồi và trợ giúp',
      to: 'feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Phím tắt trên bàn phím',
    },
  ];

  // Khai bao menu đã đăng nhập
  const MENU_ITEMS_LOGIN = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Trang cá nhân',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
    },
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'Ngôn ngữ',
        data: [
          {
            type: 'language', // handle theo type
            code: 'vi',
            title: 'Tiếng việt',
          },
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      title: 'Phản hồi và trợ giúp',
      to: 'feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Phím tắt trên bàn phím',
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: 'Đăng xuất',
    },
  ];

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image src={images.logo} alt="logo" />
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
                    <Image src={images.message} alt="icon" />
                  </button>
                </Tippy>

                <Tippy content="Hộp thư">
                  <button className={styles.iconMail}>
                    <Image src={images.mail} alt="icon" />
                  </button>
                </Tippy>

                <Menu items={MENU_ITEMS_LOGIN} onChange={handleChange}>
                  <div className={styles.avatar}>
                    <Image src={images.avatar} alt="avatar" />
                  </div>
                </Menu>
              </div>
            ) : (
              <>
                <Button text>Tải lên</Button>
                <Button primary>Đăng nhập</Button>

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
    </div>
  );
}

export default Header;
