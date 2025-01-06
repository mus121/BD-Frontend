import Tooltip from '@/component/shared/tooltip';
import { useState } from 'react';
import Followingcheck from '@/component/common/svg/Followingcheck';
import styles from './styles.module.scss';
import TertiaryButton from '../button/TertiaryButton';

function BussinessImpact({ score }: { score: number }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowed(prev => !prev);
  };

  const followButton = isFollowed ? (
    <>
      <Followingcheck size={11.9} /> Following
    </>
  ) : (
    'Follow'
  );

  return (
    <div className={styles.impactTitle}>
      <div className={styles.bussinessAlert}>
        <h5 className={styles.impactHeading}> BUSINESS IMPACT SCORE</h5>
        <Tooltip
          content='The Business Impact Score show the potential immediate (short-term) 
          and lasting (long-term) impact on your business growth from connecting with this person.'
          iconSize={16}
        />
      </div>
      <div className={styles.buttonContainer}>
        <TertiaryButton
          colorVariant='lightGray'
          type='button'
          text={followButton}
          tertiaryButtonClassName={`${styles.followAccount} ${isFollowed && styles.followed}`}
          sizeVariant='base'
          onClick={e => {
            e.stopPropagation();
            handleFollowToggle();
          }}
        />
      </div>
    </div>
  );
}
export default BussinessImpact;
