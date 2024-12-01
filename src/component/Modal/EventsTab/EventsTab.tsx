import React, { useState } from 'react';
import styles from './styles.module.scss';
import TabsComponent from '../../shared/tabs/index';
import EventDetail from './EventDetail';

const tabs = [
  { label: 'Summary', value: 'summary' },
  { label: 'Events', value: 'events' },
  { label: 'Experience', value: 'experience' },
];

const EventsTab: React.FC = () => {
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
      <div className={styles.Tabnav}>
        {activeTab === 'summary' && <p></p>}
        {activeTab === 'events' && (
          <p>
            <EventDetail />
          </p>
        )}
        {activeTab === 'experience' && <p></p>}
      </div>
    </div>
  );
};
export default EventsTab;
