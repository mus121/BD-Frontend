import ProfileImage from '@/component/shared/profileImage';
import styles from './styles.module.scss';
import SecondaryButton from '@/component/shared/button/SecondaryButton';

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div className={styles.profilePictureWrapper}>
        <ProfileImage
          src='/assets/images/LiDefault.png'
          alt=''
          className={styles.image}
          width={120}
          height={120}
        />
      </div>
      <div className={styles.name}>
        <button
          type='button'
          className={styles.titleSection}
          //   onClick={handleShowDetails}
        >
          Mustafa kamal
        </button>
      </div>
      <span className={styles.title}>
        <p>Account Manager at MasterCard</p>
      </span>
      <p className={styles.location}>Karachi Sindh</p>

      <SecondaryButton
        colorVariant='lightGray'
        text='View full profile'
        type='button'
        secondaryButtonClassName={styles.viewFullProfile}
        sizeVariant='sm'
      />
    </div>
  );
};

export default ProfileInfo;
