import WelcomeMessage from './welcome/index';
import styles from './styles.module.scss';
import AuthenticationButton from './button/index';

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
