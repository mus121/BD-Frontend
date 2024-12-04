import News from '@/component/shared/modalcomponents/News';
import EventDetails from '@/component/shared/modalcomponents/EventsDetails';
import styles from './styles.module.scss';
import EventImapct from '../EventImpact/index';
import EventImplication from '../EventImplication/index';

function EventDetailContainer() {
  return (
    <div className={styles.eventDetail}>
      <News
        title='NEWS'
        date='November 7, 2024'
        buttonText='READ NOW'
        // onButtonClick={() => console.log('Read Now clicked')}
      />
      <EventDetails
        title='Spencer Stuart Enters Strategic Partnership with AI-powered Firm Qlu'
        description='QLU recently secured a $20M Series B funding from XYZ Ventures,
         suggesting they’re looking to scale rapidly.'
        tag='Strategic Partnerships'
      />
      <EventImapct />
      <hr className={styles.separator} />

      <News
        title='LEADERSHIP ANNOUNCEMENT'
        date='November 7, 2024'
        buttonText='READ NOW'
        // onButtonClick={() => console.log('Read Now clicked')}
      />
      <EventDetails
        title='Appointed as CEO of New AI Venture - QLU.ai'
        description='Exciting Leadership Change: To Drive Innovation and
         Growth as CEO of New AI Company.'
        tag='Leadership and People'
      />
      <EventImplication />
    </div>
  );
}

export default EventDetailContainer;
