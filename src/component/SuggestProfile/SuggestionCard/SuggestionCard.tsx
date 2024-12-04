'use client';

import { useState } from 'react';
import UserProfile from '@/component/shared/UserProfile/UserProfile';
import styles from './styles.module.scss';
import Modal from '../../Modal/index';
import BussinessImpact from './BussinessImpact/index';
import Progress from './Progress';

function ConnectionProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Handle card click to toggle modal
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* Main Card */}
      <div
        className={styles.cardContainer}
        onClick={handleCardClick}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleCardClick();
          }
        }}
        role='button'
        tabIndex={0}
      >
        <UserProfile />
        <hr className={styles.Separator} />
        <BussinessImpact />
        <Progress />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          isOpen
        >
          <div className={styles.ModalContent}>
            <h3>Profile Details</h3>
            <p>More information about Bilal Kazmi...</p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ConnectionProfileCard;
