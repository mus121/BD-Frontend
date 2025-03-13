import Followingcheck from '@/component/shared/svg/Followingcheck';

export default function FollowCheck({ isFollowed }: { isFollowed: boolean }) {
  return isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );
}
