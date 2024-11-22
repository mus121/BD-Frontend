'use client';

import { useState, useEffect, Key } from 'react';
import styles from './styles.module.scss';
import SecondaryButton from '../shared/button/SecondaryButton';
import SearchProfile from '../shared/search/Search';
import ConnectionProfileCard from '../ConnectionProfileCard';
import {
  getMutualConnections,
  getTotalConnections,
  // getProfileSearch,
} from '../../hooks/useExtension';
import Pagination from '../Pagination/index';

function FollowProfile() {
  const [mutualConnections, setMutualConnections] = useState(null);
  const [connectionCount, setConnectionCount] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);
  const [profiles, setProfiles] = useState<any>(null);
  useEffect(() => {
    getMutualConnections(setMutualConnections, currentPage);
    getTotalConnections(setConnectionCount);
    // getProfileSearch();
  }, []);
  if (mutualConnections === null) {
    return <div className={styles.contactCard}>Loading.....</div>;
  }
  console.log('Profilessss', profiles);
  const onPageChange = (Page: number) => {
    getMutualConnections(setMutualConnections, Page);
    setcurrentPage(Page);
  };
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
          <SearchProfile setProfiles={setProfiles} />
        </div>
        {/* Map mutualConnections */}
        <div className={styles.connectionsrid}>
          {profiles !== null
            ? profiles?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements?.map(
                (element: any, index: Key | null | undefined) => {
                  const lockup = element?.entityLockupView;
                  const profilePictureDetails = lockup?.image?.attributes[0]?.detailData;
                  const profilePicture =
                    profilePictureDetails?.nonEntityProfilePicture?.vectorImage?.artifacts[0]
                      ?.fileIdentifyingUrlPathSegment || '';
                  const title = lockup?.title?.text || '';
                  const [firstName, lastName] = title.split(' ') || ['', ''];
                  const headline = lockup?.subtitle?.text || '';
                  console.log('Profile', profilePictureDetails);
                  return (
                    <div
                      className={styles.connectioncolumn}
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                    >
                      <ConnectionProfileCard
                        profile={{
                          firstName: firstName || '',
                          lastName: lastName || '',
                          headline,
                          profilePicture,
                          location: '', // Default to empty
                        }}
                      />
                    </div>
                  );
                },
              )
            : mutualConnections?.response.elements?.map(
                (
                  connection: {
                    connectedMemberResolutionResult: {
                      firstName: string;
                      lastName: string;
                      headline: string;
                      profilePicture: {
                        displayImageReference: {
                          vectorImage: {
                            rootUrl: any;
                            artifacts: { fileIdentifyingUrlPathSegment: any }[];
                          };
                        };
                      };
                    };
                  },
                  index: Key | null | undefined,
                ) => (
                  <div
                    className={styles.connectioncolumn}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                  >
                    <ConnectionProfileCard
                      profile={{
                        firstName: connection?.connectedMemberResolutionResult?.firstName || '',
                        lastName: connection?.connectedMemberResolutionResult?.lastName,
                        headline: connection?.connectedMemberResolutionResult?.headline,
                        profilePicture:
                          // eslint-disable-next-line no-unsafe-optional-chaining
                          connection?.connectedMemberResolutionResult?.profilePicture
                            ?.displayImageReference?.vectorImage?.rootUrl +
                            // eslint-disable-next-line no-unsafe-optional-chaining
                            connection?.connectedMemberResolutionResult?.profilePicture
                              ?.displayImageReference?.vectorImage?.artifacts[2]
                              ?.fileIdentifyingUrlPathSegment || '',
                        location: '',
                      }}
                    />
                  </div>
                ),
              )}
        </div>
      </div>
      <Pagination
        totalItems={connectionCount?.response.metadata.totalResultCount}
        itemsPerPage={10}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
export default FollowProfile;
