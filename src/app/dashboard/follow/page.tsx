import { lazy, Suspense } from 'react';
import ConnectionShimmerLoading from '@/component/shared/LiConnectionShimmerLoading/index';

const LiConnectionProfile = lazy(() => import('@/component/LiConnectionProfile/index'));

export default function FollowProfiles() {
  return (
    <Suspense fallback={<ConnectionShimmerLoading />}>
      <LiConnectionProfile />
    </Suspense>
  );
}
