import { useState } from 'react';
import SecondaryButton from '@/component/shared/button/SecondaryButton';
import styles from './styles.module.scss';
import { labelSuggestionProps } from '@/interfaces/buttonProp';

export default function NextButton({
  connectionCheck = [],
  handleNextClick,
}: labelSuggestionProps) {
  const remainingProfiles = 5 - (connectionCheck.length || 0);
  const isDisabled = remainingProfiles > 0;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => isDisabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isDisabled && isHovered && (
        <div className={styles.tooltip}>
          Please select at least {remainingProfiles} more profile to continue
        </div>
      )}

      <SecondaryButton
        colorVariant='orange'
        text='Next'
        type='button'
        sizeVariant='sm'
        disabled={isDisabled}
        secondaryButtonClassName={`${styles.nextButton} ${isDisabled ? styles.disabled : ''}`}
        onClick={handleNextClick}
      />
    </div>
  );
}
