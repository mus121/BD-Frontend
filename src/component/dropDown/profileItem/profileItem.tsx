import { ProfileItemProps } from '@/interfaces/dropDown';
import { toCamelCase } from '@/utils/camelCase';
import { getProfileImageUrl, getProfileTitle, getProfileHeadline } from '@/utils/dropDownProfile';
import ProfileImage from '../../shared/profileImage/index';
import Enter from '../../shared/svg/Enter';
import styles from './styles.module.scss';

function ProfileItem({ profile, onClick }: ProfileItemProps) {
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
