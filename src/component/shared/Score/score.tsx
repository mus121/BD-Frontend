import styles from './styles.module.scss';

type ImpactScoreProps = {
  term: string;
  score: number;
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
