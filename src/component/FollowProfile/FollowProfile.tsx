import styles from './styles.module.scss';
import SecondaryButton from '../shared/button/SecondaryButton';
import SearchProfile from '../shared/search/Search';
import ConnectionProfileCard from '../ConnectionProfileCard/index';

function FollowProfile() {
  return (
    // Follow-Profile
    <div className={styles.Profiletop}>
      <div className={styles.Profilefollow}>
        <h5>Follow profiles</h5>
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
          Search and follow profiles to enhance your network. Upon your selection system will
          suggest new profiles tailored to your preferences. Connect to enhance your business
          growth.
        </p>
      </div>

      {/* Conatct Profiles */}
      <div className={styles.Contacttop}>
        <div className={styles.Conatctprofile}>
          <h5>Contact Profiles</h5>
          <SearchProfile />
        </div>
      </div>
      <ConnectionProfileCard />
      <ConnectionProfileCard />
    </div>
  );
}

export default FollowProfile;
