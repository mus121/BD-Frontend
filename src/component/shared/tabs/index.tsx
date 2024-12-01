import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type Tabs = {
  label: string; //Tab Name
  value: string; //Tab identifier
};

type TabsComponentProps = {
  tabs: Tabs[]; //Array of tab items
  activeTab: string; // Currently selected tab
  onTabChange: (value: string) => void; //Callback to handle Tab Change
};

const TabComponent: React.FC<TabsComponentProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.Tabcomponent}>
      {tabs.map(tab => (
        <button
          key={tab.value}
          className={clsx(styles.Tabbutton, { [styles.active]: activeTab === tab.value })}
          onClick={() => onTabChange(tab.value)}
          aria-selected={activeTab === tab.value}
        >
          {tab.label}
        </button>
      ))}
      {/* Underline indicator */}
      <div
        className={styles.Tabindicator}
        style={{
          transform: `translateX(${tabs.findIndex(tab => tab.value === activeTab) * 100}%)`,
        }}
      />
    </div>
  );
};

export default TabComponent;
