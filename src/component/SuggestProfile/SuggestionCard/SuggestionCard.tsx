'use client';

import { useState } from 'react';
import UserProfile from '@/component/shared/UserProfile/UserProfile';
import styles from './styles.module.scss';
import Modal from '../../Modal/index';
import BussinessImpact from './BussinessImpact/index';
import Progress from './Progress';
import { useAiProfileSuggestions } from '@/hooks/useAiProfileSuggestions';

function ConnectionProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: SuggestProfileData, isError, isLoading } = useAiProfileSuggestions();

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Handle loading and error states
  if (isLoading) {
    return <p>Loading profiles...</p>;
  }

  if (isError) {
    return <p>Error loading profiles. Please try again later.</p>;
  }

  console.log('Suggest Profiles', SuggestProfileData);

  return (
    <>
      {/* Main Card */}
      <div className={styles.cardContainer}>
        {SuggestProfileData?.map(
          ({ person_company, person_id, person_title, Score, company_score }) => {
            // const domain = company_score['Domain Alignment score'];

            return (
              <div
                key={person_id} // Add a unique key for each item
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
                <UserProfile
                  personTitle={person_title}
                  personCompany={person_company}
                />
                <hr className={styles.Separator} />
                <BussinessImpact
                // domain={domain}
                // score={Score}
                />
                <Progress score={Score} />
              </div>
            );
          },
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          isOpen
        >
          <div className={styles.ModalContent}>
            <h3>Profile Details</h3>
            <p>More information about the selected profile...</p>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ConnectionProfileCard;
