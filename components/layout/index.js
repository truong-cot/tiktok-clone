import React from 'react';

import Header from '../widgets/Header';
import Sidebar from '../widgets/Sidebar';
import styles from './Layout.module.scss';

function Layout({ children, header = true, sidebar = true }) {
  return (
    <div className={styles.wrapper}>
      {header && <Header />}
      <div className={styles.container}>
        <div className={styles.sidebar}>{sidebar && <Sidebar />}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
