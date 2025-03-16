import Accordion from '@/component/shared/accordion';
import { EventsDetail } from '@/interfaces/modal';
import styles from './styles.module.scss';

export default function EventAccordion({ title_reasoning }: EventsDetail) {
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
