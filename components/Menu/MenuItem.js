import React from 'react';

import Button from '../control/Button';

import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
  return (
    <Button className={styles.itemContainer} href={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
