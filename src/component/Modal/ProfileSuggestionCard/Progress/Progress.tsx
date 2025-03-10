import ProgressBar from '@/component/shared/Progressbar/ProgressBar';
import styles from './styles.module.scss';

function Progress({ score }: { score: number }) {
  return (
    <div className={styles.scores}>
      <ProgressBar score={score} />
    </div>
  );
}

export default Progress;
