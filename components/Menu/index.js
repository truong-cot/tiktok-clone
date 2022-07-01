import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import styles from './Menu.module.scss';

// fix lỗi lần đầu render
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);

  // Lấy phần tử cuối mảng
  const current = history[history.length - 1];

  return (
    <Tippy
      interactive={true}
      render={(attrs) => (
        <div className={styles.menuList} tabIndex="-1" {...attrs}>
          {history.length > 1 && (
            <HeaderMenu
              title={current.title}
              onBack={() => {
                setHistory((prev) => prev.slice(0, prev.length - 1));
              }}
            />
          )}
          <div className={styles.menuItemBody}>
            {current.data.map((item, index) => {
              // Kiểm tra item có children
              const isParent = !!item.children;

              return (
                <MenuItem
                  key={index}
                  data={item}
                  onClick={() => {
                    if (isParent) {
                      setHistory((prev) => [...prev, item.children]);
                    } else {
                      onChange(item); // Lấy ra item
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
