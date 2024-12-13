import styles from './styles.module.scss';

function ProgressBar({ score }: { score: string }) {
  const segments = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className={styles.progressBar}>
      {segments.map(val => (
        <div
          key={val}
          className={`${styles.segment} ${val <= parseInt(score, 10) ? styles.active : ''}`}
        />
      ))}
    </div>
  );
}

export default ProgressBar;
