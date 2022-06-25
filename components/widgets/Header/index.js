import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faSpinner,
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
import AccountItem from './AccountItem';
import Button from '../../control/Button';
import images from '../../../assets/images';
import styles from './Header.module.scss';

function Header() {
  const [searchResult, setSearchResult] = useState([]);

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

  // Handle login item
  const handleChange = (menuItem) => {
    console.log(menuItem);
  };

  // Check login
  const isLogin = true;

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

          <Tippy
            visible={searchResult > 0}
            interactive={true}
            render={(attrs) => (
              <div className={styles.searchResult} tabIndex="-1" {...attrs}>
                <h3 className={styles.title}>Tài khoản</h3>
                <div className={styles.listAccount}>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </div>
              </div>
            )}
          >
            <div className={styles.search}>
              <input placeholder="Tìm kiếm tài khoản và video" spellCheck={false} />
              <button className={styles.btnClear}>{/* <FontAwesomeIcon icon={faCircleXmark} /> */}</button>
              <FontAwesomeIcon className={styles.iconLoading} icon={faSpinner} />

              <button className={styles.btnSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>

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
