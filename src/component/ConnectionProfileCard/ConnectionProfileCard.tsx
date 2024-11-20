import Image from 'next/image';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';
import Location from '../common/svg/Location';

interface ProfileProps {
  profile: {
    firstName: string;
    lastName: string;
    headline: string;
    profilePicture: string;
    location: string;
  };
}

function ConnectionProfileCard({ profile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, location } = profile;

  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.Userprofile}>
        <Image
          src={profilePicture || '/assets/images/Avatar.png'}
          alt={`${firstName} ${lastName}`}
          width={48}
          height={48}
          className={styles.Profileimg}
        />
        <div className={styles.Profile}>
          <h5>{`${firstName} ${lastName}`}</h5>
          <p>{headline}</p>
          {/* <div className={styles.Local}>
            <span className={styles.Location}>
              <Location size={24} />
            </span>
            <span>{location}</span>
          </div> */}
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
