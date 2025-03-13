import styles from './styles.module.scss';

function PopupHeader() {
  return (
    <div className={styles.head}>
      <h5 className={styles.bdHeading}>
        <span className={styles.bd}>Business Development App </span>
        <span>wants to access your work email account</span>
      </h5>
    </div>
  );
}

export default PopupHeader;
