import Accordion from '@/component/shared/accordian';
import styles from './styles.module.scss';

function Eventaccordian({ reasoning }: { reasoning: any }) {
  const accordionItems = reasoning?.map((item: any) => ({
    label: item?.['Reasoning Title'],
    content: item?.Reasoning,
  }));
  return (
    <div className={styles.eventAccordion}>
      <h5 className={styles.eventHeading}>WHAT THIS MEANS FOR YOU</h5>

      <Accordion items={accordionItems} />
    </div>
  );
}
export default Eventaccordian;
