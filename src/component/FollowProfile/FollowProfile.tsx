'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import SecondaryButton from '../shared/button/SecondaryButton';
import SearchProfile from '../shared/search/Search';
import ConnectionProfileCard from '../ConnectionProfileCard';
import { getMutualConnections } from '../../hooks/useExtension';

function FollowProfile() {
  const [mutualConnections, setMutualConnections] = useState(null);

  useEffect(() => {
    getMutualConnections(setMutualConnections);
  }, []);
  console.log('Mutual Connections', mutualConnections);
  if (mutualConnections === null) {
    return <div className={styles.contactCard}>No Connections</div>;
  }

  return (
    <div className={styles.Profiletop}>
      <div className={styles.Profilefollow}>
        <h5>Connect with Your Network</h5>
        <SecondaryButton
          colorVariant='lightGray'
          text='Follow 5 profiles'
          type='button'
          sizeVariant='base'
          secondaryButtonClassName={styles.Followbutton}
        />
      </div>
      <div className={styles.Profiledescription}>
        <p>
          Follow at least 5 profiles from your network to help us tailor recommendations to you.
        </p>
      </div>

      <div className={styles.Contacttop}>
        <div className={styles.Conatctprofile}>
          <h5>Your Connections</h5>
          <SearchProfile />
        </div>
      </div>
      {/* Map mutualConnections */}
      <div className={styles.connectionsrid}>
        {mutualConnections?.response.elements?.map((connection, index) => (
          <div
            className={styles.connectioncolumn}
            key={index}
          >
            <ConnectionProfileCard
              profile={{
                firstName: connection.connectedMemberResolutionResult.firstName,
                lastName: connection.connectedMemberResolutionResult.lastName,
                headline: connection.connectedMemberResolutionResult.headline,
                profilePicture:
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  connection.connectedMemberResolutionResult.profilePicture?.displayImageReference
                    ?.vectorImage?.rootUrl +
                    // eslint-disable-next-line no-unsafe-optional-chaining
                    connection.connectedMemberResolutionResult.profilePicture?.displayImageReference
                      ?.vectorImage?.artifacts[2]?.fileIdentifyingUrlPathSegment || '',
                location: '',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowProfile;
