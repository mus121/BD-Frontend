import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';

function Progress({ score }) {
  return (
    <div className={styles.scores}>
      <ImpactScore
        term={'Progress Score'}
        score={score}
      />
      {/* <ImpactScore term='Long Term' /> */}
    </div>
  );
}

export default Progress;
