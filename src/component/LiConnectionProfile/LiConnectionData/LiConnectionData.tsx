/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLiMutualConnections } from '@/hooks/useMutualConnections';
import { useLiTotalConnections } from '@/hooks/useTotalConnections';
import { useFollowedProfiles } from '@/hooks/useGetFollowProfiles';
import { useGetGlobalProfiles } from '@/hooks/useGetGlobalProfiles';
import Pagination from '../../Pagination';
import LiConnectionShimmerLoading from '../../shared/LiConnectionShimmerLoading';
import styles from './styles.module.scss';
import ProfilesList from '../ProfileList/ProfilesList';

function LiConnectionData({
  golbalProfiles,
  setGolbalProfiles,
  isSearchActive,
  searchQuery,
  currentPage,
  setcurrentPage,
}: {
  golbalProfiles: any;
  setGolbalProfiles: any;
  isSearchActive: any;
  searchQuery: any;
  currentPage: any;
  setcurrentPage: any;
}) {
  const [, setFollowprofile] = useState<string[]>([]);
  const profileData = useSelector((state: any) => state.dropDownProfiles.profiles);

  const { isLoading, error, data: connections } = useLiMutualConnections(currentPage);
  const { data: totalconnectiondata } = useLiTotalConnections();
  const { data: fetchProfileData } = useFollowedProfiles();
  const { data: GlobalSearchProfileData } = useGetGlobalProfiles(
    searchQuery,
    currentPage,
    isSearchActive,
  );

  const handlePageChange = (page: number) => {
    setcurrentPage(page);
  };
  useEffect(() => {
    setGolbalProfiles(GlobalSearchProfileData);
  }, [GlobalSearchProfileData]);

  if (isLoading) {
    return <LiConnectionShimmerLoading />;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.connectionGrid}>
      {connections && (
        <ProfilesList
          mutualConnections={connections}
          globalProfiles={golbalProfiles}
          setFollowprofile={setFollowprofile}
          followprofile={fetchProfileData}
        />
      )}
      {!profileData ? (
        golbalProfiles != null && !golbalProfiles.error ? (
          <Pagination
            totalItems={GlobalSearchProfileData?.response?.[0]?.totalcount.total || 0}
            itemsPerPage={10}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        ) : (
          <Pagination
            totalItems={totalconnectiondata?.metadata?.totalResultCount || 0}
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
