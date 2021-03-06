import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useRouter } from 'next/router';

// import icons from '../../../../assets/icons';
import icons from '../../../../assets/icons';
import styles from './NavLink.module.scss';

function NavLink() {
  const router = useRouter();

  const listNav = [
    {
      icon: icons.iconHome,
      iconActive: icons.iconHomeActive,
      title: 'Dành cho bạn',
      href: '/',
    },
    {
      icon: icons.iconFolowing,
      iconActive: icons.iconFolowingActive,
      title: 'Đang follow',
      href: '/following',
    },
    {
      icon: icons.iconLive,
      iconActive: icons.iconLiveActive,
      title: 'LIVE',
      href: '/live',
    },
  ];

  const isActive = (href) => {
    return router.pathname.split('/')[1] === href.split('/')[1];
  };

  return (
    <div className={styles.nav}>
      {listNav.map((item, i) => (
        <Link href={item.href} key={i}>
          <a
            key={i}
            className={clsx(styles.itemNav, {
              [styles.active]: isActive(item.href),
            })}
          >
            <span className={styles.icon}>
              {isActive(item.href) ? (
                <Image src={item.iconActive} alt="icon active" layout="fill" />
              ) : (
                <Image src={item.icon} alt="icon" layout="fill" />
              )}
            </span>
            <span className={styles.title}>{item.title}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default NavLink;
