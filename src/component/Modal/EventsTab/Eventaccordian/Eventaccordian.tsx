import Accordion from '@/component/shared/accordian';
import styles from './styles.module.scss';

const accordionItems = [
  {
    label: 'Potential for Joint Thought Leadership',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
  {
    label: 'Unlock New AI Talent Pools',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
  {
    label: 'C-Suite Talent Demand at QLU',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
  {
    label: 'Expanded Influence in Tech Recruitment',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
  {
    label: 'Strategic Industry Insights',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
  {
    label: 'Inroads into New Markets',
    content:
      'Collaborating with QLU could enhance Spencer Stuart’s reputation in AI-driven executive search, appealing to forward-thinking clients.',
  },
];

function Eventaccordian() {
  return (
    <div className={styles.eventAccordion}>
      <h5 className={styles.eventHeading}>WHAT THE NEW STRATEGIC PARTNERSHIP MEANS FOR YOU</h5>

      <Accordion items={accordionItems} />
    </div>
  );
}
export default Eventaccordian;
