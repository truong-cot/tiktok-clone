import React from 'react';

import AccountItem from '../../../AcccountItem';
import styles from './RecommendedAccount.module.scss';

function RecommendedAccount() {
  return (
    <div className={styles.recommendedAccount}>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={styles.viewAll}>Xem tất cả</p>
    </div>
  );
}

export default RecommendedAccount;
