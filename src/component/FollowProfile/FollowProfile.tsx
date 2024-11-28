'use client';

import { useState, useEffect } from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
import styles from './styles.module.scss';
import SecondaryButton from '../shared/button/SecondaryButton';
import SearchProfile from '../shared/search/Search';
import ConnectionProfileCard from '../ConnectionProfileCard';
import { getMutualConnections, getTotalConnections } from '../../hooks/useExtension';
import Pagination from '../Pagination/index';
import { getsubmitData } from '../../app/api/Followinglinkedinprofile';

function FollowProfile() {
  const [mutualConnections, setMutualConnections] = useState(null);
  const [connectionCount, setConnectionCount] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);
  const [profiles, setProfiles] = useState<any>(null);
  const [followprofile, setFollowprofile] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getMutualConnections(setMutualConnections, currentPage);
      getTotalConnections(setConnectionCount);
      const response = await getsubmitData();
      const uniqueProfiles = [...new Set(response)];
      setFollowprofile(uniqueProfiles);
    };
    fetchData();
  }, []);

  const onPageChange = (Page: number) => {
    setcurrentPage(Page);
    getMutualConnections(setMutualConnections, Page);
  };

  // Return loading state
  if (mutualConnections === null) {
    return <div className={styles.contactCard}>Loading.....</div>;
  }

  return (
    <div className={styles.Profiletop}>
      <div className={styles.Profilefollow}>
        <h5>Connect with Your Network</h5>
        <SecondaryButton
          colorVariant='lightGray'
          text={
            5 - followprofile.length <= 0
              ? 'Suggest Profiles'
              : `Follow ${5 - followprofile.length} profiles`
          }
          type='button'
          sizeVariant='base'
          secondaryButtonClassName={`${styles.Followbutton}
          ${5 - followprofile.length <= 0 && styles.suggested}`}
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
                  return (
                    <div
                      className={styles.connectioncolumn}
                      key={index}
                    >
                      <ConnectionProfileCard
                        profile={{
                          firstName: firstName || '',
                          lastName: lastName || '',
                          headline,
                          profilePicture,
                        }}
                        followprofile={followprofile}
                        setFollowprofile={setFollowprofile}
                      />
                    </div>
                  );
                },
              )
            : mutualConnections?.response.elements?.map(
                (
                  connection: {
                    connectedMemberResolutionResult: {
                      entityUrn: string;
                      memorialized: any;
                      publicIdentifier: string;
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
                    key={index}
                  >
                    <ConnectionProfileCard
                      key={connection?.connectedMemberResolutionResult?.publicIdentifier}
                      profile={{
                        entityUrn: connection?.connectedMemberResolutionResult?.entityUrn,
                        publicIdentifier:
                          connection?.connectedMemberResolutionResult?.publicIdentifier,
                        firstName: connection?.connectedMemberResolutionResult?.firstName,
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
                      }}
                      followprofile={followprofile}
                      setFollowprofile={setFollowprofile}
                    />
                  </div>
                ),
              )}
        </div>
      </div>
      {profiles === null && (
        <Pagination
          totalItems={connectionCount?.response.metadata.totalResultCount}
          itemsPerPage={10}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

export default FollowProfile;
