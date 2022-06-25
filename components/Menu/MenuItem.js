import styles from './Menu.module.scss';
import Button from '../control/Button';

function MenuItem({ data, onClick }) {
  return (
    // <div className={styles.itemContainer} >
    <Button className={styles.itemContainer} href={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
    // </div>
  );
}

export default MenuItem;
