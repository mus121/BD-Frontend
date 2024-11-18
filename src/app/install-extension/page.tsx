import SecondaryButton from '@/component/shared/button/SecondaryButton';
import styles from './styles.module.scss';

function WelcomeCredentials() {
  return (
    <div className={styles.Extesnion}>
      <div className={styles.Linkextension}>
        <div className={styles.Lextension}>
          <h5 className={styles.Title}>Link Your LinkedIn Account to Continue</h5>
          <p className={styles.Description}>
            To seamlessly proceed, please link your LinkedIn account by installing our
            <span style={{ color: 'white' }}> QLU extension.</span> This quick setup will ensure
            smooth access to all features.
          </p>
          <div className={styles.Buttoncenter}>
            <a href='https://chrome.google.com/webstore/detail/qlu-connect/edghcjplcffgdfbnfohbpncabclcablh?hl=en&amp;authuser=1'>
              <SecondaryButton
                text='Install QLU Extension'
                type='button'
                colorVariant='black'
                sizeVariant='xs'
                secondaryButtonClassName={styles.Installextension}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCredentials;
