import styles from './styles.module.scss';
import Check from '../../shared/checkBox/enable/enable';

export default function CheckBox() {
  {
    /* TODO: NAMING CONVENTION FIXED 'CHECKbOX'*/
    /* TODO: NAMING CONVENTION FIXED*/
  }
  return (
    <div className={styles.checkOut}>
      <Check size={24} />
      <h5 className={styles.checkDescription}>
        I agree to download my LinkedIn contacts and understand this will securely store their
        information.
      </h5>
    </div>
  );
}
