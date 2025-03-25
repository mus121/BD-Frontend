import WelcomeMessage from './welcome/index';
import styles from './styles.module.scss';
import AuthenticationButton from './button/index';

export default function AuthCredntial() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.authCredential}>
        <WelcomeMessage />
        <AuthenticationButton />
      </div>
    </div>
  );
}
