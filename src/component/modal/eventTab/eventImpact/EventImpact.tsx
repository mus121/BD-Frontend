import ImpactScore from '@/component/shared/score';
import styles from './styles.module.scss';

function EventImpact({ score }: { score: number }) {
  return (
    <div className={styles.eventImpact}>
      <h5 className={styles.impactDetails}>IMPACT DETAILS</h5>
      <div className={styles.impact}>
        <h5 className={styles.impactHaeding}>IMPACT SCORE</h5>
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
  );
}
export default EventImpact;
