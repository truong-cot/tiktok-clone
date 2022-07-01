import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Menu.module.scss';

function HeaderMenu({ title, onBack }) {
  return (
    <header className={styles.headerContainer}>
      <button className={styles.btnBack} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={styles.titleHeader}>{title}</h4>
    </header>
  );
}

export default HeaderMenu;
