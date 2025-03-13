// import ImpactScore from '@/component/shared/score';
import { EventsDetail } from '@/interfaces/modal';
import styles from './styles.module.scss';
import EventAccordion from '../eventAccordian/index';

function EventImplication({ title_reasoning }: EventsDetail) {
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
        title_reasoning={title_reasoning}
        score={0}
        roleDescription={undefined}
      />
    </div>
  );
}
export default EventImplication;
