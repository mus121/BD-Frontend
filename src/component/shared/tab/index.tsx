import clsx from 'clsx';
import { TabsComponentProps } from '@/interfaces/tab';
import styles from './styles.module.scss';

export default function TabComponent({ tabs, activeTab, onTabChange }: TabsComponentProps) {
  return (
    <div className={styles.Tabcomponent}>
      {tabs.map(tab => (
        <button
          key={tab.value}
          className={clsx(styles.Tabbutton, { [styles.active]: activeTab === tab.value })}
          onClick={() => onTabChange(tab.value)}
          aria-pressed={activeTab === tab.value}
        >
          {tab.label}
        </button>
      ))}

      <div
        className={styles.Tabindicator}
        style={{
          transform: `translateX(${tabs.findIndex(tab => tab.value === activeTab) * 100}%)`,
        }}
      />
    </div>
  );
}
