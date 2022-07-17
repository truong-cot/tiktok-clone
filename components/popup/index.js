import React from 'react';
import PopupJs from 'reactjs-popup';

import styles from './Popup.module.scss';

function Popup({ children, open, onClose, ...props }) {
  return (
    <>
      <PopupJs open={open} onClose={onClose} {...props}>
        {(close) => (
          <>
            <div className={styles.container}>
              <div className={styles.bg_popup} onClick={onClose}></div>
              {<div className={styles.content}>{children}</div>}
            </div>
          </>
        )}
      </PopupJs>
    </>
  );
}

export default Popup;
