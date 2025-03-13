import styles from './styles.module.scss';

function WelcomeMessage() {
  return (
    <div className={styles.hold}>
      <h5 className={styles.title}>Welcome to Business Development with QLU</h5>
      <p className={styles.description}>
        Continue with your preferred account linked with
        <span style={{ color: 'white' }}> work email</span> to get started with your business
        growth.
      </p>
    </div>
  );
}

export default WelcomeMessage;
