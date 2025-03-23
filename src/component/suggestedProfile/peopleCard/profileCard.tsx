import PeopleFooter from './peopleFooter/peopleFooter';
import ProfileBody from './profileBody/profileBody';
import ProfileInfo from './profileInfo/profileInfo';
import styles from './styles.module.scss';

const PeopleCard = () => {
  return (
    <div className={styles.peopleCardContainer}>
      <div className={styles.isViewedlabelContainer}>
        <p>Linkedin Connection</p>
      </div>
      {/* <div className={styles.header}>
        <CardCheckBox
          esId={profile._id}
          key={profile.publicIdentifier}
          index={count}
        />
      </div> */}
      <div className={styles.peopleCard}>
        <div className={styles.details}>
          <ProfileInfo />
        </div>
        <ProfileBody />
      </div>

      <div className={styles.peopleFooter}>
        <PeopleFooter />
      </div>
    </div>
  );
};

export default PeopleCard;
