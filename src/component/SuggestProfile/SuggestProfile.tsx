import SearchProfile from '../SearchProfile/Search';
import styles from './styles.module.scss';
import SuggestionCard from './SuggestionCard/index';

function SuggestProfile() {
  return (
    <div className={styles.suggestProfile}>
      <div className={styles.suggestHeading}>
        <h5 className={styles.networkHeading}>Expand Your Network</h5>
      </div>
      <div className={styles.suggestDescription}>
        <p className={styles.networkDescription}>
          Boost your business development by connecting with industry leaders and relevant
          professionals tailored to your interests.
        </p>
      </div>
      <div className={styles.suggestTop}>
        <div className={styles.suggestConnection}>
          <h5 className={styles.profileHead}>Suggested Profiles</h5>
          <SearchProfile />
        </div>
      </div>
      <SuggestionCard />
    </div>
  );
}

export default SuggestProfile;
