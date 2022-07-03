import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import MENU_ITEMS from '../../../common/variables/menuItems';
import MENU_ITEMS_LOGIN from '../../../common/variables/menuItemLogin';
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

  return (
    <div className={styles.container}>
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
                  <Image src={images.avatar} alt="avatar" layout="fill" />
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
  );
}

export default Header;
