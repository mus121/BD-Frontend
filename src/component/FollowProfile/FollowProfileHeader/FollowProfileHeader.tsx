import SecondaryButton from '../../shared/button/SecondaryButton/index';
import styles from './styles.module.scss';

function FollowProfileHeader({ followCount }: { followCount: number }) {
  return (
    <>
      <div className={styles.Profilefollow}>
        <h5>Connect with Your Network</h5>
        <SecondaryButton
          colorVariant='lightGray'
          text={followCount <= 0 ? 'Suggest Profiles' : `Follow ${followCount} profiles`}
          type='button'
          sizeVariant='base'
          secondaryButtonClassName={`${styles.Followbutton} ${followCount <= 0 && styles.suggested}`}
        />
      </div>
      <div className={styles.Profiledescription}>
        <p>
          Follow at least 5 profiles from your network to help us tailor recommendations to you.
        </p>
      </div>
    </>
  );
}

export default FollowProfileHeader;
