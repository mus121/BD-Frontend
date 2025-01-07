import Tooltip from '@/component/shared/Tooltip';
import { useState } from 'react';
import styles from './styles.module.scss';
import TertiaryButton from '../Buttons/TertiaryButton';
import FollowCheck from '../FollowCheck';

function BussinessImpact() {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowed(prev => !prev);
  };

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
      <TertiaryButton
        colorVariant='lightGray'
        type='button'
        text={<FollowCheck isFollowed={isFollowed} />}
        tertiaryButtonClassName={`${styles.followAccount} ${isFollowed && styles.followed}`}
        sizeVariant='base'
        onClick={e => {
          e.stopPropagation();
          handleFollowToggle();
        }}
      />
    </div>
  );
}
export default BussinessImpact;
