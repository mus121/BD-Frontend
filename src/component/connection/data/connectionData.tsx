/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useConnection } from '@/hooks/connection/mutual';
import { useConnectionCount } from '@/hooks/connection/total';
import { useFetchConnection } from '@/hooks/profile/connection';
import { useGlobalProfile } from '@/hooks/search/global';
import { RootState } from '@/store/store';
import { LiConnectionDataProps } from '@/interfaces/connection';
import Pagination from '../../pagination';
import ConnectionShimmer from '../../shared/connectionLoading/index';
import styles from './styles.module.scss';
import ProfilesList from '../profileList/list';

export default function ConnectionData({
  globalProfiles,
  setGlobalProfiles,
  isSearchActive,
  searchQuery,
  currentPage,
  setCurrentPage,
}: LiConnectionDataProps) {
  const [, setFollowProfile] = useState<string[]>([]);
  const profileData = useSelector((state: RootState) => state.dropDownProfiles.profiles);

  const { isLoading, error, data: mutualConnections } = useConnection(currentPage);
  const { data: totalConnectionData } = useConnectionCount();
  const { data: followedProfiles } = useFetchConnection();
  const { data: globalSearchProfiles } = useGlobalProfile(searchQuery, currentPage, isSearchActive);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  console.log('Fetch Connection', followedProfiles);
  useEffect(() => {
    if (globalSearchProfiles) {
      setGlobalProfiles(globalSearchProfiles);
    }
  }, [globalSearchProfiles, setGlobalProfiles]);

  if (isLoading) {
    // return <ConnectionShimmer />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const totalItems = isSearchActive
    ? globalSearchProfiles?.response?.[0]?.totalcount.total || 0
    : totalConnectionData || 0;

  return (
    <div className={styles.container}>
      {mutualConnections && (
        <ProfilesList
          mutualConnections={mutualConnections}
          globalProfiles={globalProfiles}
          setFollowProfile={setFollowProfile}
          followProfile={followedProfiles}
        />
      )}
      {!profileData ? (
        globalProfiles !== null && !globalProfiles.error ? (
          <Pagination
            totalItems={totalItems}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : (
          <Pagination
            totalItems={totalItems}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )
      ) : null}
    </div>
  );
}
