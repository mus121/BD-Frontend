// import ImpactScore from '@/component/shared/score';
import { EventsDetail } from '@/types/TModal';
import styles from './styles.module.scss';
import EventAccordion from '../EventAccordion/index';

function EventImplication({ reasoning }: EventsDetail) {
  return (
    <div className={styles.eventImpact}>
      <h5 className={styles.impactDetails}>IMPLICATION DETAILS</h5>
      {/* <div className={styles.impact}>
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
      </div> */}
      <EventAccordion
        reasoning={reasoning}
        score={0}
        roleDescription={undefined}
      />
    </div>
  );
}
export default EventImplication;
