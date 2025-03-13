import News from '@/component/shared/modal/News';
import EventDetails from '@/component/shared/modal/EventsDetails';
import { EventsDetail } from '@/interfaces/modal';
import styles from './styles.module.scss';
import EventImapct from '../eventImpact/index';
import EventImplication from '../eventImplication/index';

function EventInfo({ score, roleDescription, title_reasoning }: EventsDetail) {
  return (
    <div className={styles.eventDetail}>
      <News
        title='NEWS'
        date='November 7, 2024'
        buttonText='READ NOW'
      />
      <EventDetails
        title='Spencer Stuart Enters Strategic Partnership with AI-powered Firm Qlu'
        description='QLU recently secured a $20M Series B funding from XYZ Ventures,
         suggesting they’re looking to scale rapidly.'
        tag='Strategic Partnerships'
      />
      <EventImapct score={score} />
      <hr className={styles.separator} />

      <News
        title='LEADERSHIP ANNOUNCEMENT'
        date='November 7, 2024'
        buttonText='READ NOW'
      />
      <EventDetails
        title={roleDescription?.Heading}
        description={roleDescription?.Summary}
        tag='Leadership and People'
      />
      <EventImplication
        score={score}
        title_reasoning={title_reasoning}
        roleDescription={undefined}
      />
    </div>
  );
}

export default EventInfo;
