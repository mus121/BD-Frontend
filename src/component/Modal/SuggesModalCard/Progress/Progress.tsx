// import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';
import ProgressBar from '@/component/shared/progressbar/ProgressBar';

function Progress({ score }: { score: string }) {
  return (
    <div className={styles.scores}>
      {/* <ImpactScore
        term={'Progress Score'}
        score={score}
      /> */}
      <ProgressBar score={score}/>
    </div>
  );
}

export default Progress;
