import { useAppSelector } from '@/hooks/rtk';

export const useMiniProfilePublicIdentifier = () =>
  useAppSelector(state => state.profile.miniProfile.publicIdentifier);
