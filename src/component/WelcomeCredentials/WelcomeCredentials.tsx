import WelcomeMessage from './WelcomeMessage/index';
import styles from './styles.module.scss';
import AuthenticationButton from './AuthenticationButton/index';

function WelcomeCredentials() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.welcome}>
        <WelcomeMessage />
        <AuthenticationButton />
      </div>
    </div>
  );
}

export default WelcomeCredentials;
