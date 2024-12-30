import { useRouter } from 'next/navigation';
import { useAiFindProfileSuggestions } from '@/hooks/useAiFindProfileSuggestions';
import { useMiniProfilePublicIdentifier } from '@/hooks/useMiniProfilePublicIdentifier';
import PrimaryButton from '../../shared/button/PrimaryButton/index';
import SecondaryButton from '../../shared/button/SecondaryButton/index';
import styles from './styles.module.scss';

function LiProfileButton() {
  const { mutate } = useAiFindProfileSuggestions();
  const publicIdentifier = useMiniProfilePublicIdentifier();

  const router = useRouter();
  const followprofile = () => {
    mutate(publicIdentifier);
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
        onClick={followprofile}
      />
    </div>
  );
}

export default LiProfileButton;
