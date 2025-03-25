'use client';

import { useState } from 'react';
import SecondaryButton from '@/components/shared/button/SecondaryButton';
import styles from './styles.module.scss';
import { labelSuggestionProps } from '@/interfaces/buttonProp';
import { useAppSelector } from '@/hooks/rtk';
import { useFetchConnection } from '@/hooks/profile/connection';

export default function NextButton({ handleNextClick }: labelSuggestionProps) {
  const { data: connectionProfile } = useFetchConnection();
  const isDisabled = useAppSelector(state => state.stepComponent.isDisabledNextButton);
  const [isHovered, setIsHovered] = useState(false);
  const remainingProfile = 5 - (connectionProfile?.length || 0);
  const currentSteps = useAppSelector(state => state.stepComponent.currentStep);
  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => isDisabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isDisabled && isHovered && (
        <div className={styles.tooltip}>
          Please select at least {remainingProfile} profile to continue
        </div>
      )}

      <SecondaryButton
        colorVariant='orange'
        text={currentSteps === 2 ? 'Suggest Profiles' : 'Next'}
        type='button'
        sizeVariant='sm'
        disabled={isDisabled}
        secondaryButtonClassName={`${styles.nextButton} ${isDisabled ? styles.disabled : ''}`}
        onClick={handleNextClick}
      />
    </div>
  );
}
