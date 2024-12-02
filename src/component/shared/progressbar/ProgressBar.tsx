import styles from './styles.module.scss';

function ProgressBar() {
  return (
    <div className={styles.Progressbar}>
      <div className={`${styles.Segment} ${styles.Active}`} />
      <div className={`${styles.Segment} ${styles.Active}`} />
      <div className={`${styles.Segment} ${styles.Active}`} />
      <div className={`${styles.Segment} ${styles.Active}`} />
      <div className={`${styles.Segment} ${styles.Active}`} />
      <div className={styles.Segment} />
      <div className={styles.Segment} />
      <div className={styles.Segment} />
      <div className={styles.Segment} />
      <div className={styles.Segment} />
    </div>
  );
}

export default ProgressBar;
