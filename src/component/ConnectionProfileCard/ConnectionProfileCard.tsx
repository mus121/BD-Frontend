'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import TertiaryButton from '../shared/button/TertiaryButton';

interface ProfileProps {
  profile: {
    firstName: string;
    lastName: string;
    headline: string;
    profilePicture: string;
    publicIdentifier: string;
  };
  followprofile: string[];
  setFollowprofile: React.Dispatch<React.SetStateAction<string[]>>;
}
function ConnectionProfileCard({ profile, followprofile, setFollowprofile }: ProfileProps) {
  const { firstName, lastName, headline, profilePicture, publicIdentifier } = profile;
  const isFollowed = followprofile.includes(publicIdentifier);
  const onClick = () => {
    if (isFollowed) {
      setFollowprofile(prev => prev.filter(value => value !== publicIdentifier));
    } else {
      setFollowprofile(prev => [...prev, publicIdentifier]);
    }
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
            {headline
              ? headline.length > 50
                ? `${headline.slice(0, 70)}...`
                : headline
              : 'No headline available'}
          </p>
        </div>
      </div>
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={isFollowed ? 'Following' : 'Follow'}
        tertiaryButtonClassName={`${styles.Followaccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={onClick}
      />
    </div>
  );
}
export default ConnectionProfileCard;
