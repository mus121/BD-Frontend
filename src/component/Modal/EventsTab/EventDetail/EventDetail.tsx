import TertiaryButton from '@/component/shared/button/TertiaryButton';
import styles from './styles.module.scss';
import EventImapct from '../EventImpact/index';

const EventDetail = () => {
  return (
    <div className={styles.Eventdetail}>
      <div className={styles.Eventnews}>
        <div className={styles.Newshead}>
          <h5>NEWS</h5>
        </div>
        <div className={styles.Eventdates}>
          <h5>November 7, 2024</h5>
          <p className={styles.Borderline}></p>
          <TertiaryButton
            type='button'
            text='READ NOW'
            tertiaryButtonClassName={styles.Readnow}
            colorVariant={'orange'}
          />
        </div>
      </div>

      <div className={styles.Eventsheading}>
        <h5>Spencer Stuart Enters Strategic Partnership with AI-powered Firm Qlu</h5>
        <p>
          QLU recently secured a $20M Series B funding from XYZ Ventures, suggesting they’re looking
          to scale rapidly.
        </p>
        <span className={styles.Partnership}>Strategic Partnerships</span>
      </div>
      <EventImapct />
      <hr className={styles.Seprator} />

      <div className={styles.Eventleader}>
        <div className={styles.Leaderhead}>
          <h5>Leadership Announcement</h5>
        </div>
        <div className={styles.Leaderdates}>
          <h5>November 7, 2024</h5>
          <p className={styles.Borderline}></p>
          <TertiaryButton
            type='button'
            text='LINKEDIN PROFILE'
            tertiaryButtonClassName={styles.Linkedin}
            colorVariant={'orange'}
          />
        </div>
      </div>

      <div className={styles.Eventsleader}>
        <h5>Appointed as CEO of New AI Venture - QLU.ai</h5>
        <p>Exciting Leadership Change: To Drive Innovation and Growth as CEO of New AI Company</p>
        <span className={styles.Leadership}>Leadership and People</span>
      </div>
      <EventImapct />
    </div>
  );
};
export default EventDetail;
