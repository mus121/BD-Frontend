import ImpactButton from '../button/ImpactButton';
import styles from './styles.module.scss';

function ProgressBar({ score }: { score: number }) {
  const segments = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <>
      <div className={styles.buttonImpact}>
        <h5 className={styles.totalScores}>
          Total
          <span className={styles.score}>{score}</span>
        </h5>
        <ImpactButton
          colorVariant='gray'
          sizeVariant='sm'
          text='Average Impact'
          impactButtonClassName={styles.average}
        />
      </div>
      <div className={styles.progressBar}>
        {segments.map(val => (
          <div
            key={val}
            className={`${styles.segment} ${val <= score ? styles.active : ''}`}
          />
        ))}
      </div>
    </>
  );
}

export default ProgressBar;
