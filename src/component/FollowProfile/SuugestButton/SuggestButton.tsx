import SecondaryButton from '@/component/shared/button/SecondaryButton';
import styles from './styles.module.scss';

type SuggestButtonProps = {
  followprofile: string[];
  handleButtonClick: () => void;
};

const SuggestButton: React.FC<SuggestButtonProps> = ({ followprofile, handleButtonClick }) => {
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
      secondaryButtonClassName={`${styles.Followbutton}
        ${5 - followprofile.length <= 0 && styles.suggested}`}
      onClick={handleButtonClick}
    />
  );
};
export default SuggestButton;
