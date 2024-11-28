import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Enter from '../../common/svg/Enter';
import { getProfileSearch } from '../../../hooks/useExtension';
import { toCamelCase } from '../../../utils/camelcase';

interface DropdownProps {
  searchQuery: string;
}

type Profile = {
  entityLockupView?: {
    title?: {
      text?: string;
    };
    role?: string;
    imageUrl?: string;
  };
};

// eslint-disable-next-line react/function-component-definition
const Dropdown: React.FC<DropdownProps> = ({ searchQuery }) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      getProfileSearch(searchQuery, response => {
        if (response?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements) {
          setProfiles(response.response.data.searchDashTypeaheadByGlobalTypeahead.elements);
        } else {
          setProfiles([]);
        }
      });
    }
  }, [searchQuery]);

  const handleProfileClick = (profile: Profile) => {
    console.log('Profile clicked:', profile);
  };

  return (
    <div className={styles.Dropdown}>
      {profiles.length > 0 ? (
        <div className={styles.Section}>
          <div className={styles.Sectiontitle}>
            <p>SEARCH RESULTS</p>
          </div>
          {profiles.map((profile, index) => (
            <div
              key={profile.id || index}
              onClick={() => handleProfileClick(profile)}
              className={styles.Profileitem}
            >
              {/* Profile Image */}
              <div className={styles.ProfileImage}>
                <Image
                  src={
                    profile?.entityLockupView?.image?.attributes[0]?.detailData
                      .nonEntityProfilePicture?.vectorImage?.artifacts[0]
                      ?.fileIdentifyingUrlPathSegment || '/assets/images/Avatar.png'
                  }
                  // alt={profile.entityLockupView.title?.text || 'Profile'}
                  width={24}
                  height={24}
                  className={styles.ProfileImg}
                  alt=''
                />
              </div>

              {/* Profile Details */}
              <div className={styles.ProfileDetails}>
                <span className={styles.ContactName}>
                  {profile.entityLockupView?.title?.text
                    ? toCamelCase(profile.entityLockupView?.title?.text)
                    : 'No Title'}
                </span>
                {/* <span className={styles.ContactRole}>
                  {profile.entityLockupView?.subtitle?.text
                    ? profile.entityLockupView?.subtitle?.text.slice(0, 50) +
                      (profile.entityLockupView?.subtitle?.text.length > 50 ? '...' : '')
                    : 'No Role'}
                </span> */}
              </div>

              {/* Action Icon
              <span className={styles.EnterIcon}>
                <Enter size={24} />
              </span> */}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.Section}>
          <p>No profiles found</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
