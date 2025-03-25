'use client';

import { useState } from 'react';
import styles from './styles.module.scss';
import SecondaryButton from '@/components/shared/button/SecondaryButton';

const PeopleFooter = () => {
  const [selected, setSelected] = useState<'interested' | 'not_interested' | null>(null);

  return (
    <>
      <div className={styles.container}>
        <SecondaryButton
          text='Follow'
          colorVariant='gray'
          sizeVariant='xs'
          type='button'
          secondaryButtonClassName={styles.followButton}
        />
      </div>
    </>
  );
};

export default PeopleFooter;
