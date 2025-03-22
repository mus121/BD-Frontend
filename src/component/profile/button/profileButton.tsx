import { useRouter } from 'next/navigation';
import { useFindProfile } from '@/hooks/aiProfile/find';
import { usePublicIdentifier, useProfile } from '@/hooks/profile/liProfile';
import PrimaryButton from '../../shared/button/PrimaryButton/index';
import SecondaryButton from '../../shared/button/SecondaryButton/index';
import styles from './styles.module.scss';

export default function LiProfileButton() {
  const { mutate } = useProfile();

  const router = useRouter();
  const liProfile = () => {
    mutate();
    router.push('/dashboard/connection');
  };
  return (
    <div className={styles.buttons}>
      <PrimaryButton
        text='Not My Profile'
        type='button'
        sizeVariant='base'
        colorVariant='orange'
        primaryButtonClassName={styles.notProfile}
      />

      <SecondaryButton
        text='Confirm'
        type='button'
        sizeVariant='base'
        colorVariant='orange'
        secondaryButtonClassName={styles.confirmButton}
        onClick={liProfile}
      />
    </div>
  );
}
