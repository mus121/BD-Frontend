import styles from './styles.module.scss';
import AuthenticationButton from './AuthenticationButton/index';

function WelcomeCredentials() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Welcome}>
        <div className={styles.Hold}>
          <h5 className={styles.Title}>Welcome to Business Development with QLU</h5>
          <p className={styles.Description}>
            Continue with your preferred account linked with
            <span style={{ color: 'white' }}> work email</span> to get started with your business
            growth.
          </p>
          <AuthenticationButton />
        </div>
      </div>
    </div>
  );
}

export default WelcomeCredentials;
