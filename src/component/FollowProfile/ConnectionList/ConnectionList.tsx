import ProfileCard from '../ProfileCard/index';
import styles from './styles.module.scss';

function ConnectionList({
  profiles,
  mutualConnections,
  followprofile,
  setFollowprofile,
}: {
  profiles: any;
  mutualConnections: any;
  followprofile: string[];
  setFollowprofile: (profiles: string[]) => void;
}) {
  return (
    <div className={styles.connectionsrid}>
      {profiles !== null
        ? profiles?.response?.data?.searchDashTypeaheadByGlobalTypeahead?.elements?.map(
            (element: any, index: React.Key) => {
              const lockup = element?.entityLockupView;
              const profilePicture =
                lockup?.image?.attributes[0]?.detailData?.nonEntityProfilePicture?.vectorImage
                  ?.artifacts[0]?.fileIdentifyingUrlPathSegment || '';
              const title = lockup?.title?.text || '';
              const [firstName, lastName] = title.split(' ') || ['', ''];
              const headline = lockup?.subtitle?.text || '';
              return (
                <ProfileCard
                  key={index}
                  profile={{ firstName, lastName, headline, profilePicture }}
                  followprofile={followprofile}
                  setFollowprofile={setFollowprofile}
                />
              );
            },
          )
        : mutualConnections?.response?.elements?.map((connection: any, index: React.Key) => {
            const member = connection?.connectedMemberResolutionResult;
            const profilePicture =
              // eslint-disable-next-line no-unsafe-optional-chaining
              member?.profilePicture?.displayImageReference?.vectorImage?.rootUrl +
                // eslint-disable-next-line no-unsafe-optional-chaining
                member?.profilePicture?.displayImageReference?.vectorImage?.artifacts[2]
                  ?.fileIdentifyingUrlPathSegment || '';
            return (
              <ProfileCard
                key={member?.publicIdentifier}
                profile={{
                  entityUrn: member?.entityUrn,
                  publicIdentifier: member?.publicIdentifier,
                  firstName: member?.firstName,
                  lastName: member?.lastName,
                  headline: member?.headline,
                  profilePicture,
                }}
                followprofile={followprofile}
                setFollowprofile={setFollowprofile}
              />
            );
          })}
    </div>
  );
}

export default ConnectionList;
