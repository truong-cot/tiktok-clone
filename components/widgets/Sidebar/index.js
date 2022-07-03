import React from 'react';
import NavLink from './NavLink';

import FollowingAccounts from './FollowingAccounts';
import RecommendedAccount from './RecommendedAccount';
import styles from './Sidebar.module.scss';

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <NavLink />
      <div className={styles.line}></div>

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
  );
}

export default SideBar;
