import Followingcheck from '@/component/common/svg/Followingcheck';

// Component to handle Follow Text
function FollowText({ isFollowed }: { isFollowed: boolean }) {
  return isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );
}

export default FollowText;
