import styles from './styles.module.scss';

type ImpactScoreProps = {
  term: string; // The term (e.g., "Short Term" or "Long Term")
};

function ImpactScore({ term, score }: ImpactScoreProps) {
  return (
    <div className={styles.score}>
      <span className={styles.scoreTerm}>{term}</span>
      <span className={styles.scoreFound}>{score}</span>
    </div>
  );
}

export default ImpactScore;
