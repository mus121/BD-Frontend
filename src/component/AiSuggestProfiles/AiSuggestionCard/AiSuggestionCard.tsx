'use client';

import { useState } from 'react';
import AiProfiles from '@/component/shared/AiProfiles/index';
import AiBussinessImpact from '@/component/shared/BussinessImpact/index';
import AiProgressBar from '@/component/shared/progressbar/ProgressBar';
import styles from './styles.module.scss';
import Modal from '../../Modal/index';

function AiSuggestionCard({
  personTitle,
  personCompany,
  companyScore,
}: {
  personTitle: string;
  personCompany: string;
  score: string;
  companyScore: { [key: string]: { score: number | null } } | null;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Card */}
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
        {/* Profile Details */}
        <AiProfiles
          personTitle={personTitle}
          personCompany={personCompany}
        />
        <hr className={styles.separator} />
        {/* Conditional Rendering */}
        {companyScore?.['Domain Alignment score']?.score !== null && (
          <>
            <AiBussinessImpact score={companyScore['Domain Alignment score']?.score} />
            <AiProgressBar score={companyScore['Domain Alignment score']?.score} />
          </>
        )}
      </div>
      {/* Modal */}
      {isModalOpen && (
        <Modal
          personTitle={personTitle}
          personCompany={personCompany}
          score={companyScore?.['Domain Alignment score']?.score || 0} // Provide a fallback value if score is null
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
