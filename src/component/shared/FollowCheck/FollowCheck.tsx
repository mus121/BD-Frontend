import Followingcheck from '@/component/common/svg/Followingcheck';

function FollowCheck({ isFollowed }: { isFollowed: boolean }) {
  return isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );
}

export default FollowCheck;
