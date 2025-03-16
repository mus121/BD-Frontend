import ProgressBar from '@/component/shared/progressBar/ProgressBar';
import styles from './styles.module.scss';

export default function Progress({ score }: { score: number }) {
  return (
    <div className={styles.scores}>
      <ProgressBar score={score} />
    </div>
  );
}
