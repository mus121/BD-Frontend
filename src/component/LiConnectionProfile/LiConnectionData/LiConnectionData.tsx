/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLiMutualConnections } from '@/hooks/useMutualConnections';
import { useLiTotalConnections } from '@/hooks/useTotalConnections';
import { useFollowedProfiles } from '@/hooks/useGetFollowProfiles';
import { useGetGlobalProfiles } from '@/hooks/useGetGlobalProfiles';
import { RootState } from '@/store/store';
import { LiConnectionDataProps } from '@/types/TLiConnectionData';
import Pagination from '../../Pagination';
import LiConnectionShimmerLoading from '../../shared/LiConnectionShimmerLoading';
import styles from './styles.module.scss';
import ProfilesList from '../ProfileList/ProfilesList';

function LiConnectionData({
  globalProfiles,
  setGlobalProfiles,
  isSearchActive,
  searchQuery,
  currentPage,
  setCurrentPage,
}: LiConnectionDataProps) {
  const [, setFollowProfile] = useState<string[]>([]);
  const profileData = useSelector((state: RootState) => state.dropDownProfiles.profiles);

  const { isLoading, error, data: connections } = useLiMutualConnections(currentPage);
  const { data: totalConnectionData } = useLiTotalConnections();
  const { data: followedProfiles } = useFollowedProfiles();
  const { data: globalSearchProfiles } = useGetGlobalProfiles(
    searchQuery,
    currentPage,
    isSearchActive,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (globalSearchProfiles) {
      setGlobalProfiles(globalSearchProfiles);
    }
  }, [globalSearchProfiles, setGlobalProfiles]);

  if (isLoading) {
    return <LiConnectionShimmerLoading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const totalItems = isSearchActive
    ? globalSearchProfiles?.response?.[0]?.totalcount.total || 0
    : totalConnectionData || 0;

  return (
    <div className={styles.connectionGrid}>
      {connections && (
        <ProfilesList
          mutualConnections={connections}
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

export default LiConnectionData;
