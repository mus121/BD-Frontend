'use client';

import Error from '@/component/common/svg/Error';
import PrimaryButton from '@/component/shared/Buttons/PrimaryButton';
import styles from './error.module.scss';

export default function ErrorBoundry() {
  return (
    <div className={styles.container}>
      <div className={styles.errorIcon}>
        <Error size={72} />
      </div>
      <div>
        <p className={styles.errorText}>An error occurred!</p>
      </div>
      <div className={styles.tryAgain}>
        <PrimaryButton
          colorVariant='orange'
          text='Try Again'
          sizeVariant='base'
          primaryButtonClassName={styles.tryButton}
        />
      </div>
    </div>
  );
}
