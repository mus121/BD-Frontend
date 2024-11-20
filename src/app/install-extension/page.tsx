'use client';

import SecondaryButton from '@/component/shared/button/SecondaryButton';
import { useRouter } from 'next/navigation';
import styles from './styles.module.scss';
import { useAppSelector } from '../../hooks/rtk';

function WelcomeCredentials() {
  const { isExtensionInstalled } = useAppSelector(state => state.app.extension);

  const router = useRouter();

  const handleextesnionbutton = () => {
    router.push('chrome://extensions/?id=lldoeigkokefjgohogmehffdohhphgco');
  };
  return (
    <div className={styles.Extesnion}>
      <div className={styles.Linkextension}>
        <div className={styles.Lextension}>
          <h5 className={styles.Title}>Link Your LinkedIn Account to Continue</h5>
          <p className={styles.Description}>
            To seamlessly proceed, please link your LinkedIn account by installing our
            <span style={{ color: 'white' }}> QLU extension.</span> This quick setup will ensure
            smooth access to all features.
          </p>
          <div className={styles.Buttoncenter}>
            <SecondaryButton
              text='Install QLU Extension'
              type='button'
              colorVariant='black'
              sizeVariant='xs'
              secondaryButtonClassName={styles.Installextension}
              onClick={handleextesnionbutton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCredentials;
