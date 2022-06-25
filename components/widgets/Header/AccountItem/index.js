import styles from './AccountItem.module.scss';
import Image from 'next/image';
import images from '../../../../assets/images';

function AccountItem() {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src={images.avatar} alt="avatar" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>Trường</h3>
        <h4 className={styles.userName}>truong.1609</h4>
      </div>
    </div>
  );
}

export default AccountItem;
