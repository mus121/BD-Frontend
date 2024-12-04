import ProgressBar from '../progressbar/ProgressBar';
import styles from './styles.module.scss';

type ImpactScoreProps = {
  term: string; // The term (e.g., "Short Term" or "Long Term")
};

function ImpactScore({ term }: ImpactScoreProps) {
  return (
    <div className={styles.score}>
      <span className={styles.scoreTerm}>{term}</span>
      <ProgressBar />
    </div>
  );
}

export default ImpactScore;
