import { ProfileItemProps } from '@/types/dropdownProfile';
import { toCamelCase } from '@/utils/camelcase';
import ProfileImage from '../../shared/profileImages/index';
import Enter from '../../common/svg/Enter';
import styles from './styles.module.scss';
import {
  getProfileImageUrl,
  getProfileTitle,
  getProfileHeadline,
} from './profileUtils/profileUtils';

function ProfileItem({ profile, onClick }: ProfileItemProps) {
  // Use the utility functions to extract the profile information
  const imageUrl = getProfileImageUrl(profile);
  const title = getProfileTitle(profile);
  const headline = getProfileHeadline(profile);

  return (
    <div
      onClick={() => onClick(profile)}
      className={styles.profileItem}
    >
      {/* Profile Image */}
      <div className={styles.profileImage}>
        <ProfileImage
          src={imageUrl}
          width={24}
          height={24}
          className={styles.profileImg}
          alt='Profile image'
        />
      </div>

      {/* Profile Details */}
      <div className={styles.profileDetails}>
        <span className={styles.contactName}>{toCamelCase(title)}</span>
        <span className={styles.contactRole}>
          {headline.length > 50 ? `${headline.slice(0, 50)}...` : headline}
        </span>
      </div>

      {/* Action Icon */}
      <span className={styles.enterIcon}>
        <Enter size={24} />
      </span>
    </div>
  );
}

export default ProfileItem;
