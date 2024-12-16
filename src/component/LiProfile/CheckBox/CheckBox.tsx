import styles from './styles.module.scss';
import Check from '../../shared/checkbox/enable/enable';

function CheckBox() {
  return (
    <div className={styles.checkOut}>
      <Check />
      <h5 className={styles.checkDescription}>
        I agree to download my LinkedIn contacts and understand this will securely store their
        information.
      </h5>
    </div>
  );
}
export default CheckBox;
