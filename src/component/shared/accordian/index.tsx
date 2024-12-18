import React, { useState } from 'react';
import clsx from 'clsx';
import Downchevron from '@/component/common/svg/Downchevron';
import Upperchevron from '@/component/common/svg/Upperchevron';
import styles from './styles.module.scss';

type AccordionItem = {
  label: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[]; // List of accordion items
};

// eslint-disable-next-line react/function-component-definition
const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.Accordion}>
      {items.map((item, index) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={styles.Accordionitem}
        >
          <button
            className={clsx(styles.Accordionheader, {
              [styles.active]: activeIndex === index,
            })}
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.label}</span>
            <span
              className={clsx(styles.Chevron, {
                [styles.open]: activeIndex === index,
              })}
            >
              {activeIndex === index ? <Upperchevron size={20} /> : <Downchevron size={20} />}
            </span>
          </button>
          <div
            className={clsx(styles.Accordioncontent, {
              [styles.open]: activeIndex === index,
            })}
            style={{
              maxHeight: activeIndex === index ? '150px' : '0', // Fixed height for content
            }}
          >
            {activeIndex === index && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
