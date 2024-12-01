import styles from './styles.module.scss';

const ProgressBar = () => {
  return (
    <div className={styles.Progressbar}>
      <div className={`${styles.Segment} ${styles.Active}`}></div>
      <div className={`${styles.Segment} ${styles.Active}`}></div>
      <div className={`${styles.Segment} ${styles.Active}`}></div>
      <div className={`${styles.Segment} ${styles.Active}`}></div>
      <div className={`${styles.Segment} ${styles.Active}`}></div>
      <div className={styles.Segment}></div>
      <div className={styles.Segment}></div>
      <div className={styles.Segment}></div>
      <div className={styles.Segment}></div>
      <div className={styles.Segment}></div>
    </div>
  );
};

export default ProgressBar;
