import styles from './AccountItem.module.scss';
import Image from 'next/image';

function AccountItem({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image src={data.avatar} alt={data.full_name} layout="fill" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{data.full_name}</h3>
        <h4 className={styles.userName}>{data.nickname}</h4>
      </div>
    </div>
  );
}

export default AccountItem;
