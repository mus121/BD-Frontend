import { useRouter } from 'next/navigation';
import { useAiFindProfileSuggestions } from '@/hooks/useAiFindProfileSuggestions';
import { useMiniProfilePublicIdentifier } from '@/hooks/useMiniProfilePublicIdentifier';
import useLiProfile from '@/hooks/useLiProfile';
import PrimaryButton from '../../shared/Buttons/PrimaryButton/index';
import SecondaryButton from '../../shared/Buttons/SecondaryButton/index';
import styles from './styles.module.scss';

function LiProfileButton() {
  const { mutate } = useLiProfile();

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
