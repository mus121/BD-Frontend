import React, { useState } from 'react';
import { EventsDetail } from '@/interfaces/modal';
import styles from './styles.module.scss';
import TabsComponent from '../../shared/tab/index';
import EventInfo from './info/index';

const tabs = [
  { label: 'Summary', value: 'summary' },
  { label: 'Events', value: 'events' },
  { label: 'Experience', value: 'experience' },
];

export default function EventsTab({ score }: EventsDetail) {
  const [activeTab, setActiveTab] = useState('events');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div>
      <TabsComponent
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <div className={styles.tabNav}>
        {activeTab === 'summary' && <p />}
        {activeTab === 'events' && (
          <p>
            <EventInfo score={score} />
          </p>
        )}
        {activeTab === 'experience' && <p />}
      </div>
    </div>
  );
}
