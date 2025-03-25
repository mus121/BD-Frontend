'use client';

import { useState } from 'react';
import AiProfiles from '@/components/shared/aiProfile/index';
import AiBussinessImpact from '@/components/shared/bussinessImpact/index';
import AiProgressBar from '@/components/shared/progressBar/index';
import styles from './styles.module.scss';
import { AiSuggestionCardProps } from '@/interfaces/aiProfile';

function AiSuggestionCard({
  personName,
  personLocation,
  personTitle,
  personCompany,
  companyScore,
  roleDescription,
  title_reasoning,
}: AiSuggestionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={styles.profileCard}
        onClick={handleCardClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick();
          }
        }}
        role='button'
        tabIndex={0}
      >
        <div className={styles.leftProfileCard}>
          <AiProfiles
            personName={personName}
            personLocation={personLocation}
            personTitle={personTitle}
            personCompany={personCompany}
          />
        </div>
        <hr className={styles.separator} />
        <div className={styles.rightProfileCard}>
          <AiBussinessImpact />
          <AiProgressBar score={companyScore} />
        </div>
      </div>
    </>
  );
}

export default AiSuggestionCard;
