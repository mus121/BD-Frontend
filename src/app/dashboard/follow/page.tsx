import { lazy, Suspense } from 'react';
import ShimmerLoading from '@/component/ShimmerLoading';

const FollowProfile = lazy(() => import('@/component/FollowProfile/index'));

export default function FollowProfiles() {
  return (
    <Suspense fallback={<ShimmerLoading />}>
      <FollowProfile />
    </Suspense>
  );
}
