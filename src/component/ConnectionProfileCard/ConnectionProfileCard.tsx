import Image from 'next/image';
import { useAppSelector } from '@/hooks/rtk';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';
import Location from '../common/svg/Location';

function ConnectionProfileCard() {
  // const profile = useAppSelector(state => state.)
  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.Userprofile}>
        <Image
          src='/assets/images/Avatar.png'
          alt='User Profile'
          width={48}
          height={48}
          className={styles.Profileimg}
        />
        <div className={styles.Profile}>
          <h5>Bilal Kazmi</h5>
          <p>UX Designer @ Google</p>
          <div className={styles.Local}>
            <span className={styles.Location}>
              <Location size={24} />
            </span>
            <span>Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text='Follow'
        tertiaryButtonClassName={styles.Followaccount}
        sizeVariant='base'
      />
    </div>
  );
}
export default ConnectionProfileCard;
