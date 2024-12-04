import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Enter from '../../common/svg/Enter';
import { getProfileSearch } from '../../../hooks/getProfileSearch';
import { toCamelCase } from '../../../utils/camelcase';

type DropdownProps = {
  searchQuery: string;
  setSearchProfile: any;
};

type Profile = {
  entityLockupView?: {
    title?: {
      text?: string;
    };
    subtitle?: string;
    text: any;
    imageUrl?: string;
  };
};

function Dropdown({ searchQuery, setSearchProfile }: DropdownProps) {
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
    } else {
      // Clear profiles when searchQuery is empty
      setProfiles([]);
    }
  }, [searchQuery]);

  const handleProfileClick = (profile: Profile) => {
    setSearchProfile(profile);
    console.log('Profile', profile);
  };

  // Don't render anything if searchQuery is empty
  if (!searchQuery.trim()) {
    return null;
  }

  return (
    <div className={styles.dropDown}>
      {profiles.length > 0 ? (
        <div className={styles.section}>
          <div className={styles.sectionTitle}>
            <p>SEARCH RESULTS</p>
          </div>
          {profiles
            .filter(profile => profile.entityLockupView?.subtitle?.text)
            .map((profile, index) => (
              <div
                key={profile.id || index}
                onClick={() => handleProfileClick(profile)}
                className={styles.profileItem}
              >
                {/* Profile Image */}
                <div className={styles.profileImage}>
                  <Image
                    src={
                      profile?.entityLockupView?.image?.attributes[0]?.detailData
                        .nonEntityProfilePicture?.vectorImage?.artifacts[0]
                        ?.fileIdentifyingUrlPathSegment || '/assets/images/Avatar.png'
                    }
                    width={24}
                    height={24}
                    className={styles.profileImg}
                    alt=''
                  />
                </div>

                {/* Profile Details */}
                <div className={styles.profileDetails}>
                  <span className={styles.contactName}>
                    {profile.entityLockupView?.title?.text
                      ? toCamelCase(profile.entityLockupView?.title?.text)
                      : 'No Title'}
                  </span>
                  <span className={styles.contactRole}>
                    {profile.entityLockupView?.subtitle?.text
                      ? (() => {
                          const headline = profile.entityLockupView.subtitle.text;
                          const parts = headline.split('•'); // Split by '•'
                          const lastPart = parts[parts.length - 1]?.trim() || ''; // Get the last part and trim whitespace
                          return lastPart.length > 50
                            ? `${lastPart.slice(0, 50)}...` // Truncate to 50 characters
                            : lastPart; // Return as is if less than 50 characters
                        })()
                      : 'No Headline'}
                  </span>
                </div>

                {/* Action Icon */}
                <span className={styles.enetrIcon}>
                  <Enter size={24} />
                </span>
              </div>
            ))}
        </div>
      ) : // No "No profiles found" message
      null}
    </div>
  );
}

export default Dropdown;
