import { useAppSelector } from '@/hooks/rtk';
import { useLiUserLocation } from '@/hooks/useLiUserLocation';
import { LocationResponse } from '@/types/Location';

export function useExtractLocation() {
  const miniProfile = useAppSelector(state => state.profile.miniProfile);
  const { data: fetchLiUserLocation } = useLiUserLocation(`${miniProfile.publicIdentifier}`);

  return (
    (fetchLiUserLocation as LocationResponse)?.data?.identityDashProfilesByMemberIdentity
      ?.elements?.[0]?.geoLocation?.geo?.defaultLocalizedName || ''
  );
}
