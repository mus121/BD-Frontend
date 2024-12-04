import styles from './styles.module.scss';

type EventDetailsProps = {
  title: string;
  description: string;
  tag: string;
};

function EventDetails({ title, description, tag }: EventDetailsProps) {
  return (
    <div className={styles.eventDetails}>
      <h5 className={styles.eventTitle}>{title}</h5>
      <p className={styles.eventDescription}>{description}</p>
      <span className={styles.partnerShip}>{tag}</span>
    </div>
  );
}

export default EventDetails;
