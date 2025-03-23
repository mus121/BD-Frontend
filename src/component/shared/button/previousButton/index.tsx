'use client';

import { useState } from 'react';
import SecondaryButton from '@/component/shared/button/SecondaryButton';
import styles from './styles.module.scss';
import { labelSuggestionProps } from '@/interfaces/buttonProp';
import { useAppSelector } from '@/hooks/rtk';
import RightChevron from '../../svg/RightChevron';

export default function PreviousButton({ handleNextClick }: labelSuggestionProps) {
  const isDisabled = useAppSelector(state => state.stepComponent.isDisabledNextButton);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => isDisabled}
    >
      <SecondaryButton
        colorVariant='gray'
        text={'Back'}
        type='button'
        sizeVariant='xs'
        disabled={isDisabled}
        secondaryButtonClassName={styles.back}
        onClick={handleNextClick}
      />
    </div>
  );
}
