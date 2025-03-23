'use client';

import { useState } from 'react';
import styles from './styles.module.scss';

const PeopleFooter = () => {
  const [selected, setSelected] = useState<'interested' | 'not_interested' | null>(null);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.interested}>
          <button
            className={`${styles.button} ${selected === 'interested' ? styles.active : ''}`}
            onClick={() => setSelected(selected === 'interested' ? null : 'interested')}
          >
            👍 Interested
          </button>

          <button
            className={`${styles.button} ${selected === 'not_interested' ? styles.active : ''}`}
            onClick={() => setSelected(selected === 'not_interested' ? null : 'not_interested')}
          >
            👎 Not Interested
          </button>
        </div>
        <div className={styles.followButton}>
          <button className={styles.followButton}>Follow</button>
        </div>
      </div>
    </>
  );
};

export default PeopleFooter;
