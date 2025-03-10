import SecondaryButton from '@/component/shared/Buttons/SecondaryButton';
import { SuggestButtonProps } from '@/types/TSuggestButtonProps';
import styles from './styles.module.scss';

function SuggestButton({ followprofile = [], handleButtonClick }: SuggestButtonProps) {
  const profilesLeft = 5 - (followprofile?.length || 0);

  return (
    <SecondaryButton
      colorVariant='lightGray'
      text={profilesLeft <= 0 ? 'Suggest Profiles' : `Follow ${profilesLeft} profiles`}
      type='button'
      sizeVariant='base'
      secondaryButtonClassName={`${styles.followButton} ${profilesLeft <= 0 ? styles.suggested : ''}`}
      onClick={handleButtonClick}
    />
  );
}

export default SuggestButton;
