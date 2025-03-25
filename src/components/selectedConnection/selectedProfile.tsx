import SelectedCard from './card/card';
import styles from './styles.module.scss';

export default function SelectedProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.selectedProfile}>
        <h5 className={styles.selectedHeading}>Selected Profiles</h5>
      </div>
      <SelectedCard />
    </div>
  );
}
