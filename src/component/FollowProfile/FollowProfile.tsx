import styles from './styles.module.scss';
import SecondaryButton from '../shared/button/SecondaryButton';
import SearchProfile from '../shared/search/Search';
import ConnectionProfileCard from '../ConnectionProfileCard/index';

function FollowProfile() {
  return (
    // Follow-Profile
    <div className={styles.Profiletop}>
      <div className={styles.Profilefollow}>
        <h5>Connect with Your Network</h5>
        <SecondaryButton
          colorVariant='lightGray'
          text='Follow 5 profiles'
          type='button'
          sizeVariant='base'
          secondaryButtonClassName={styles.Followbutton}
        />
      </div>

      <div className={styles.Profiledescription}>
        <p>
          Follow at least 5 profiles from your network to help us tailor recommendations to you.
        </p>
      </div>

      {/* Conatct Profiles */}
      <div className={styles.Contacttop}>
        <div className={styles.Conatctprofile}>
          <h5>Your Connections</h5>
          <SearchProfile />
        </div>
      </div>
      <ConnectionProfileCard />
      <ConnectionProfileCard />
    </div>
  );
}

export default FollowProfile;
