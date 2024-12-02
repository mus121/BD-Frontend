import Image from 'next/image';
import Location from '@/component/common/svg/Location';
import TertiaryButton from '@/component/shared/button/TertiaryButton';
import styles from './styles.module.scss';
import BussinessImpact from './BussinessImpact/index';
import Progress from './Progress/index';

function SuggestModalCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.userProfile}>
        <div className={styles.userCard}>
          <Image
            src='/assets/images/Suggest.png'
            alt=''
            width={80}
            height={80}
            className={styles.profileImg}
          />
          <div className={styles.profile}>
            <h5>Bilal Kazmi</h5>
            <p>UX Designer @ Google</p>
            <p className={styles.locationChange}>
              <span className={styles.location}>
                <Location size={16} />
              </span>
              Islamabad, Pakistan
            </p>
          </div>
        </div>
        <TertiaryButton
          colorVariant='lightGray'
          type='button'
          text='Follow'
          tertiaryButtonClassName={styles.followAccount}
          sizeVariant='base'
        />
      </div>
      {/* // Suggest_Profile_Card End */}
      <hr className={styles.Separator} />
      <div className={styles.Bussinessimpact}>
        <BussinessImpact />
        <Progress />
      </div>
    </div>
  );
}
export default SuggestModalCard;
