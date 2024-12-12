import { useAppSelector } from '@/hooks/rtk';
import { useLiUserLocation } from '@/hooks/useLiUserLocation';

export function extractLocation() {
  const miniProfile = useAppSelector(state => state.profile.miniProfile);
  const { data: fetchLiUserLocation } = useLiUserLocation(`${miniProfile.publicIdentifier}`);
  return (
    fetchLiUserLocation?.data?.identityDashProfilesByMemberIdentity?.elements?.[0]?.geoLocation?.geo
      ?.defaultLocalizedName || ''
  );
}
