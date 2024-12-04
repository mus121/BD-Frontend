import Link from 'next/link';
import ProfileImage from '../shared/profileImages/profileImages';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <ProfileImage
          src='/assets/images/Logo.png'
          alt='BD APP'
          width={32}
          height={32}
        />
      </Link>
    </nav>
  );
}

export default Navbar;
