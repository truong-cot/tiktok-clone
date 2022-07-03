import React from 'react';
import Image from 'next/image';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';

import Button from '../control/Button';
import images from '../../assets/images';
import styles from './AccountItem.module.scss';

function AccountItem({ visible }) {
  return (
    <Tippy
      visible={visible}
      interactive={true}
      placement="bottom"
      delay={[700, 0]}
      render={(attrs) => (
        <div className={styles.accountItemHover} tabIndex="-1" {...attrs}>
          <div className={styles.top}>
            <div className={styles.avatar}>
              <Image src={images.avatar} alt="avatar" layout="fill" />
            </div>
            <Button primary>Folow</Button>
          </div>
          <div className={styles.account}>
            <h4 className={styles.userName}>
              _truogg.1609_{' '}
              <span className={styles.iconCheck}>
                <Image src={images.iconCheck} alt="icon check" layout="fill" />
              </span>
            </h4>
            <p className={styles.name}>Đặng Bá Trường</p>
          </div>
          <div className={styles.bottom}>
            <p className={styles.folower}>
              6.2M <span>Folower</span>
            </p>
            <p className={styles.like}>
              6.2M <span>Thích</span>
            </p>
          </div>
        </div>
      )}
    >
      <div className={styles.accountItem}>
        <div className={styles.avatar}>
          <Image src={images.avatar} alt="avatar" layout="fill" />
        </div>
        <div className={styles.account}>
          <h4 className={styles.userName}>
            _truogg.1609_{' '}
            <span className={styles.iconCheck}>
              <Image src={images.iconCheck} alt="icon check" layout="fill" />
            </span>
          </h4>
          <p className={styles.name}>Đặng Bá Trường</p>
        </div>
      </div>
    </Tippy>
  );
}

export default AccountItem;
