'use client';

import { useRouter } from 'next/navigation';
import NextButton from '@/component/shared/button/nextButton/index';
import PreviousButton from '@/component/shared/button/previousButton/index';
import { useAppSelector } from '@/hooks/rtk';
import { decrementCurrentStep, incrementCurrentStep } from '@/slices/steps';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch = useDispatch();
  const router = useRouter();
  const currentStep = useAppSelector(state => state.stepComponent.currentStep);

  const handleNextClick = () => {
    if (currentStep === 2) {
      router.push('/suggestedProfile');
    } else {
      dispatch(incrementCurrentStep());
    }
  };

  return (
    <div className={styles.container}>
      {children}

      <div className={styles.buttonContainer}>
        {currentStep > 0 && (
          <PreviousButton handleNextClick={() => dispatch(decrementCurrentStep())} />
        )}
        <NextButton handleNextClick={handleNextClick} />
      </div>
    </div>
  );
}
