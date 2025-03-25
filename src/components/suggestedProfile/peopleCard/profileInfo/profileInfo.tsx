'use client';

import { useState } from 'react';
import ProfileImage from '@/components/shared/profileImage';
import styles from './styles.module.scss';
import SecondaryButton from '@/components/shared/button/SecondaryButton';
import { useSidebarUtils } from '@/components/sidebars/hooks/useSidebarUtils';

const ProfileInfo = () => {
  const { onProfileClick } = useSidebarUtils();

  const handleOpenModal = () => {
    onProfileClick('01JH2WKXPJNJ6H7RBDZMMVGEAC');
  };
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePictureWrapper}>
          <div className={styles.profileCard}></div>
          <ProfileImage
            src='/assets/images/LiDefault.png'
            alt=''
            className={styles.image}
            width={120}
            height={120}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.name}>
            <button
              type='button'
              className={styles.titleSection}
              onClick={handleOpenModal}
            >
              Mustafa kamal
            </button>
          </div>
          <span className={styles.title}>
            <p>Account Manager at MasterCard</p>
          </span>
          <p className={styles.location}>New York Metropolitan Area</p>
        </div>

        <div className={styles.viewProfile}>
          <SecondaryButton
            colorVariant='lightGray'
            text='View full profile'
            type='button'
            secondaryButtonClassName={styles.viewFullProfile}
            sizeVariant='sm'
            onClick={handleOpenModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
