'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import SecondaryButton from '@/components/shared/button/SecondaryButton';
import DisLikesvg from '@/components/shared/svg/DisLikesvg';

const PeopleFooter = () => {
  const [selected, setSelected] = useState<'interested' | 'not_interested' | null>(null);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.notInterested}>
          <button
            className={styles.not}
            onClick={() => setSelected('interested')}
          >
            <span className={styles.like}>
              <DisLikesvg size={19} />
            </span>
            <span className={styles.interest}>Not Interested</span>
          </button>
        </div>
        <div className={styles.follow}>
          <SecondaryButton
            text='Follow'
            colorVariant='gray'
            sizeVariant='xs'
            type='button'
            secondaryButtonClassName={styles.followButton}
          />
        </div>
      </div>
    </>
  );
};

export default PeopleFooter;
