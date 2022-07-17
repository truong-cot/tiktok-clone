import React from 'react';
import Image from 'next/image';

import icons from '../../assets/icons';

import styles from './Menu.module.scss';

function HeaderMenu({ title, onBack }) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.btnBack} onClick={onBack}>
        <Image src={icons.iconLeft} alt="icon left" layout="fill" />
      </div>
      <h4 className={styles.titleHeader}>{title}</h4>
    </header>
  );
}

export default HeaderMenu;
