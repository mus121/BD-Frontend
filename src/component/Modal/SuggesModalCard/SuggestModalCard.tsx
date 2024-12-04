import styles from './styles.module.scss';
import BussinessImpact from './BussinessImpact/index';
import Progress from './Progress/index';
import UserProfile from '../../shared/UserProfile/UserProfile';

function SuggestModalCard() {
  return (
    <div className={styles.cardContainer}>
      <UserProfile />
      <hr className={styles.separator} />
      <div className={styles.bussinessImpact}>
        <BussinessImpact />
        <Progress />
      </div>
    </div>
  );
}
export default SuggestModalCard;
