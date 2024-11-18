import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <Link
        href='/'
        passHref
      >
        <Image
          src='/assets/images/Logo.png'
          alt='BD APP'
          width={32}
          height={32}
          priority
        />
      </Link>
    </nav>
  );
}

export default Navbar;
