'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.scss';
import TertiaryButton from '../../shared/button/TertiaryButton';
import Location from '../../common/svg/Location';
import Modal from '../../Modal/index'; // Assuming you have a reusable Modal component
import Tooltip from '@/component/shared/tooltip';
import ProgressBar from '@/component/shared/progressbar/ProgressBar';
import Followingcheck from '@/component/common/svg/Followingcheck';

function ConnectionProfileCard() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle button click to toggle the follow state
  const handleFollowToggle = () => {
    setIsFollowed(prev => !prev);
  };

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
        className={styles.Cardcontainer}
        onClick={handleCardClick}
      >
        {/* Card_Section_1 Start */}
        <div className={styles.Userprofile}>
          <div className={styles.Usercard}>
            <Image
              src='/assets/images/Suggest.png'
              alt=''
              width={80}
              height={80}
              className={styles.Profileimg}
            />
            <div className={styles.Profile}>
              <h5>Bilal Kazmi</h5>
              <p>UX Designer @ Google</p>
              <p className={styles.Locationchange}>
                <span className={styles.Location}>
                  <Location size={16} />
                </span>
                Islamabad, Pakistan
              </p>
            </div>
          </div>

          <TertiaryButton
            colorVariant='lightGray'
            type='button'
            text={
              isFollowed ? (
                <>
                  <Followingcheck size={11.9} /> Following
                </>
              ) : (
                'Follow'
              )
            }
            tertiaryButtonClassName={`${styles.Followaccount} ${isFollowed && styles.followed}`}
            sizeVariant='base'
            onClick={e => {
              e.stopPropagation(); // Prevent triggering card click
              handleFollowToggle();
            }}
          />
        </div>
        <hr className={styles.Separator} />
        {/* Card_Section_1 End */}

        {/* Card_Section_2 Start */}
        <div className={styles.Bussinessimpact}>
          <div className={styles.Impacttitle}>
            <div className={styles.Bussinessalert}>
              <h5> BUSINESS IMPACT SCORE</h5>
              <Tooltip />
            </div>
            <p>Average Impact</p>
          </div>
        </div>
        {/* Card_Section_2 End */}

        {/* Short&Long Term Start */}
        <div className={styles.Scores}>
          <div className={styles.Score}>
            <span>Short Term</span>
            <ProgressBar />
          </div>
          <div className={styles.Score}>
            <span>Long Term</span>
            <ProgressBar />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          onClose={handleModalClose}
          isOpen={true}
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
