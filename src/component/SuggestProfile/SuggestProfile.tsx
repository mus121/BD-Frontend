import SearchProfile from '../SearchProfile/Search';
import styles from './styles.module.scss';
import SuggestionCard from './SuggestionCard/index';

function SuggestProfile() {
  return (
    <div className={styles.Suggestprofile}>
      <div className={styles.Suggestheading}>
        <h5>Expand Your Network</h5>
      </div>
      <div className={styles.Suggestedescription}>
        <p>
          Boost your business development by connecting with industry leaders and relevant
          professionals tailored to your interests.
        </p>
      </div>
      <div className={styles.Suggesttop}>
        <div className={styles.Suggestconnection}>
          <h5>Suggested Profiles</h5>
          <SearchProfile />
        </div>
      </div>
      <SuggestionCard />
    </div>
  );
}

export default SuggestProfile;
