import React from 'react';

import AccountItem from '../../../AcccountItem';
import styles from './FollowingAccounts.module.scss';

function FollowingAccounts() {
  return (
    <div className={styles.recommendedAccount}>
      <AccountItem visible={false} />
      <AccountItem visible={false} />
      <AccountItem visible={false} />
      <AccountItem visible={false} />

      <p className={styles.viewAll}>Xem thêm</p>
    </div>
  );
}

export default FollowingAccounts;
