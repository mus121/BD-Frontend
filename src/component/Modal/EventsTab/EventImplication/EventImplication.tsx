import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';
import Eventaccordian from '../Eventaccordian/index';

function EventImplication({ score }: { score: number }) {
  return (
    <div className={styles.eventImpact}>
      <h5 className={styles.impactDetails}>IMPLICATION DETAILS</h5>
      <div className={styles.impact}>
        <h5 className={styles.impactHaeding}>IMPACT SCORE</h5>
        <div className={styles.impactScore}>
          <div className={styles.scoreTerm}>
            <ImpactScore
              term='Short Term'
              score={score}
            />
            <ImpactScore
              term='Long Term'
              score={score}
            />
          </div>
        </div>
      </div>
      <Eventaccordian />
    </div>
  );
}
export default EventImplication;
