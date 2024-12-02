import ProgressBar from '@/component/shared/progressbar/ProgressBar';
import styles from './styles.module.scss';

function Progress() {
  return (
    <div className={styles.scores}>
      <div className={styles.score}>
        <span>Short Term</span>
        <ProgressBar />
      </div>
      <div className={styles.score}>
        <span>Long Term</span>
        <ProgressBar />
      </div>
    </div>
  );
}

export default Progress;
