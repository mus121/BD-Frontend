import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';
import Eventaccordian from '../Eventaccordian/index';

function EventImpact() {
  return (
    <div className={styles.eventImpact}>
      <h5 className={styles.impactDetails}>IMPACT DETAILS</h5>
      <div className={styles.impact}>
        <h5 className={styles.impactHaeding}>IMPACT SCORE</h5>
        <div className={styles.scoreTerm}>
          <ImpactScore term='Short Term' />
          <ImpactScore term='Long Term' />
        </div>
      </div>
      <Eventaccordian />
    </div>
  );
}
export default EventImpact;
