import { useRouter } from 'next/navigation';
import { useFindProfile } from '@/hooks/aiProfile';
import { usePublicIdentifier } from '@/hooks/profile';
import { useProfile } from '@/hooks/profile';
import PrimaryButton from '../../shared/button/PrimaryButton/index';
import SecondaryButton from '../../shared/button/SecondaryButton/index';
import styles from './styles.module.scss';

function LiProfileButton() {
  const { mutate } = useProfile();

  const router = useRouter();
  const liProfile = () => {
    mutate();
    router.push('/dashboard/follow');
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

export default LiProfileButton;
