import Accordion from '@/component/shared/Accordion';
import { EventsDetail } from '@/types/TModal';
import styles from './styles.module.scss';

function EventAccordion({ title_reasoning }: EventsDetail) {
  // Mapping the title_reasoning to extract key-value pairs
  const accordionItems = title_reasoning?.map((item: any) => {
    const key = Object.keys(item)[0];
    const value = item[key];

    return {
      label: key,
      content: value,
    };
  });

  return (
    <div className={styles.eventAccordion}>
      <h5 className={styles.eventHeading}>WHAT THIS MEANS FOR YOU</h5>

      <Accordion items={accordionItems} />
    </div>
  );
}

export default EventAccordion;
