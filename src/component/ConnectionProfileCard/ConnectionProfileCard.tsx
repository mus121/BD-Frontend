import Image from 'next/image';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';
import Followingcheck from '../common/svg/Followingcheck';
import { submitData } from '../../app/api/Followlinkedinprofile';

type ProfileProps = {
  profile: {
    firstName: string;
    lastName: string;
    headline: string;
    profilePicture: string;
    publicIdentifier: string;
    entityUrn: string;
  };
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
};
function ConnectionProfileCard({ profile, followprofile = [], setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier, entityUrn } = profile;
  const isFollowed = followprofile.includes(publicIdentifier);

  const onClick = async () => {
    setFollowprofile(prev =>
      isFollowed ? prev.filter(value => value !== publicIdentifier) : [...prev, publicIdentifier],
    );
    submitData(publicIdentifier, entityUrn, !isFollowed);
  };

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
          <p title={headline}>
            {(() => {
              if (!headline) {
                return 'No headline available';
              }
              return headline.length > 50 ? `${headline.slice(0, 70)}...` : headline;
            })()}
          </p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={
          isFollowed ? (
            <>
              <Followingcheck size={11.9} /> Following
            </>
          ) : (
            'Follow'
          )
        }
        tertiaryButtonClassName={`${styles.Followaccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={onClick}
      />
    </div>
  );
}

export default ConnectionProfileCard;
