import React, { useState } from 'react';
import { EventsDetail } from '@/types/TModal';
import styles from './styles.module.scss';
import TabsComponent from '../../shared/Tabs/index';
import EventInfo from './EventInfo/index';

const tabs = [
  { label: 'Summary', value: 'summary' },
  { label: 'Events', value: 'events' },
  { label: 'Experience', value: 'experience' },
];

function EventsTab({ score, roleDescription, reasoning }: EventsDetail) {
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
            <EventInfo
              score={score}
              roleDescription={roleDescription}
              reasoning={reasoning}
            />
          </p>
        )}
        {activeTab === 'experience' && <p />}
      </div>
    </div>
  );
}
export default EventsTab;
