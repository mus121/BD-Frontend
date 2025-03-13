import ProgressBar from '@/component/shared/progressBar/ProgressBar';
import styles from './styles.module.scss';

function Progress({ score }: { score: number }) {
  return (
    <div className={styles.scores}>
      <ProgressBar score={score} />
    </div>
  );
}

export default Progress;
