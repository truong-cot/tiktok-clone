import Header from '../widgets/Header';
import Sidebar from '../widgets/Sidebar';

import styles from './Layout.module.scss';

function Layout({ children, header = true, sidebar = true }) {
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

export default Layout;
