// import ImpactScore from '@/component/shared/score';
import ProgressBar from '@/component/shared/progressbar/ProgressBar';
import styles from './styles.module.scss';

function Progress({ score }: { score: number }) {
  return (
    <div className={styles.scores}>
      {/* <ImpactScore
        term={'Progress Score'}
        score={score}
      /> */}
      <ProgressBar score={score} />
    </div>
  );
}

export default Progress;
