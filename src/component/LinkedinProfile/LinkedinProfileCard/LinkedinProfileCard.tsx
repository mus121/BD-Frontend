import { useAppSelector } from '@/hooks/rtk';
import Image from 'next/image';
import Location from '@/component/common/svg/Location';
import Home from '@/component/common/svg/Home';
import styles from './styles.module.scss';

function LinkedProfileCard() {
  const miniProfile = useAppSelector(state => state.profile.miniProfile);
  const imgUrl = miniProfile.picture['com.linkedin.common.VectorImage'].rootUrl
    ? `${miniProfile.picture['com.linkedin.common.VectorImage'].rootUrl}${miniProfile.picture['com.linkedin.common.VectorImage'].artifacts[0]?.fileIdentifyingUrlPathSegment}`
    : '';

  return (
    <div className={styles.linkedinCard}>
      <div className={styles.linkedin}>
        <Image
          src='/assets/images/linkedIn.png'
          width={16}
          height={16}
          alt='LinkedIn'
        />
        <h5 className={styles.linkedHeading}>LinkedIn</h5>
      </div>
      <div className={styles.cardData}>
        <div className={styles.userImg}>
          {imgUrl && (
            <Image
              src={imgUrl}
              width={48}
              height={48}
              alt='User'
              className={styles.userProfile}
            />
          )}
        </div>
        <div className={styles.head}>
          <h5>
            {miniProfile.firstName} {miniProfile.lastName}
          </h5>
          <span>{miniProfile.occupation}</span>
        </div>
      </div>
      <div className={styles.cardLocation}>
        <div className={styles.location}>
          <Location size={24} />
          <h5>Islamabad, Pakistan</h5>
        </div>
        <div className={styles.university}>
          <span className={styles.home}>
            <Home size={18} />
          </span>
          <h5>University of Calicut</h5>
        </div>
      </div>
    </div>
  );
}

export default LinkedProfileCard;
