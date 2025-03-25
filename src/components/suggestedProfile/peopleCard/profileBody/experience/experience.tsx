import Experiences from './experiences/experiences';
import styles from './styles.module.scss';

const experience = () => {
  return (
    <div className={styles.experiences}>
      <Experiences />
      <Experiences />
      <Experiences />
    </div>
  );
};
export default experience;
