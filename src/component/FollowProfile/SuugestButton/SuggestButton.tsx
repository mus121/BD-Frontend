import SecondaryButton from '@/component/shared/button/SecondaryButton';
import styles from './styles.module.scss';

type SuggestButtonProps = {
  followprofile: string[];
  handleButtonClick: () => void;
};

function SuggestButton({ followprofile, handleButtonClick }: SuggestButtonProps) {
  return (
    <SecondaryButton
      colorVariant='lightGray'
      text={
        5 - followprofile.length <= 0
          ? 'Suggest Profiles'
          : `Follow ${5 - followprofile.length} profiles`
      }
      type='button'
      sizeVariant='base'
      secondaryButtonClassName={`${styles.followButton}
        ${5 - followprofile.length <= 0 && styles.suggested}`}
      onClick={handleButtonClick}
    />
  );
}
export default SuggestButton;
