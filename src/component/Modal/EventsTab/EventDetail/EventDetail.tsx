import TertiaryButton from '@/component/shared/button/TertiaryButton';
import styles from './styles.module.scss';
import EventImapct from '../EventImpact/index';

function EventDetail() {
  return (
    <div className={styles.eventDetail}>
      <div className={styles.eventNews}>
        <div className={styles.newsHead}>
          <h5>NEWS</h5>
        </div>
        <div className={styles.eventDates}>
          <h5>November 7, 2024</h5>
          <p className={styles.borderLine} />
          <TertiaryButton
            type='button'
            text='READ NOW'
            tertiaryButtonClassName={styles.readNow}
            colorVariant='orange'
          />
        </div>
      </div>

      <div className={styles.eventHeadings}>
        <h5>Spencer Stuart Enters Strategic Partnership with AI-powered Firm Qlu</h5>
        <p>
          QLU recently secured a $20M Series B funding from XYZ Ventures, suggesting they’re looking
          to scale rapidly.
        </p>
        <span className={styles.partnerShip}>Strategic Partnerships</span>
      </div>
      <EventImapct />

      <hr className={styles.seprator} />

      <div className={styles.eventLeader}>
        <div className={styles.leaderHead}>
          <h5>Leadership Announcement</h5>
        </div>
        <div className={styles.leaderDates}>
          <h5>November 7, 2024</h5>
          <p className={styles.borderLine} />
          <TertiaryButton
            type='button'
            text='LINKEDIN PROFILE'
            tertiaryButtonClassName={styles.linkedIn}
            colorVariant='orange'
          />
        </div>
      </div>

      <div className={styles.eventsLeader}>
        <h5>Appointed as CEO of New AI Venture - QLU.ai</h5>
        <p>Exciting Leadership Change: To Drive Innovation and Growth as CEO of New AI Company</p>
        <span className={styles.leaderShip}>Leadership and People</span>
      </div>
      <EventImapct />
    </div>
  );
}
export default EventDetail;
