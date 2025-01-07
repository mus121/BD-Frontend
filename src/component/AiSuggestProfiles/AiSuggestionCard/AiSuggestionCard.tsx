'use client';

import { useState } from 'react';
import AiProfiles from '@/component/shared/AiProfiles/index';
import AiBussinessImpact from '@/component/shared/BussinessImpact/index';
import AiProgressBar from '@/component/shared/Progressbar/ProgressBar';
import { AiSuggestionCardProps } from '@/types/TAiSuggesProfiles';
import styles from './styles.module.scss';
import Modal from '../../Modal/index';

function AiSuggestionCard({
  personName,
  personLocation,
  personTitle,
  personCompany,
  companyScore,
  roleDescription,
  reasoning,
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
          {companyScore?.['Domain Alignment score']?.score !== null && (
            <>
              <AiBussinessImpact />
              <AiProgressBar score={companyScore?.['Domain Alignment score']?.score} />
            </>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          personName={personName}
          personLocation={personLocation}
          personTitle={personTitle}
          personCompany={personCompany}
          score={companyScore?.['Domain Alignment score']?.score || 0}
          roleDescription={roleDescription}
          reasoning={reasoning}
          onClose={handleModalClose}
          isOpen
        >
          <div className={styles.ModalContent}>
            <h3>Profile Details</h3>
            <p>
              More information about {personTitle} at {personCompany}...
            </p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default AiSuggestionCard;
