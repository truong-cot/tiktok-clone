import Header from './Header';
import Sidebar from './Sidebar';

import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children, header = true, sidebar = true }) {
  return (
    <div>
      {header && <Header />}
      <div className={styles.container}>
        {sidebar && <Sidebar />}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
