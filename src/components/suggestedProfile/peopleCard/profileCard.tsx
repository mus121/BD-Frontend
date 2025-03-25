import Check from '@/components/shared/checkBox/enable/enable';
import PeopleFooter from './peopleFooter/peopleFooter';
import ProfileBody from './profileBody/profileBody';
import ProfileInfo from './profileInfo/profileInfo';
import styles from './styles.module.scss';

const PeopleCard = () => {
  return (
    <div className={styles.peopleCardContainer}>
      <div className={styles.isViewedlabelContainer}>
        <p className={styles.linkedinConnection}>Linkedin Connection</p>
      </div>
      <Check size={28} />

      <div className={styles.peopleCard}>
        <div className={styles.details}>
          <ProfileInfo />
          <ProfileBody />
        </div>
      </div>

      <div className={styles.peopleFooter}>
        <PeopleFooter />
      </div>
    </div>
  );
};

export default PeopleCard;
