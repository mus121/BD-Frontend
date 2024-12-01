import styles from './styles.module.scss';
import Image from 'next/image';
import Location from '@/component/common/svg/Location';
import TertiaryButton from '@/component/shared/button/TertiaryButton';
import Tooltip from '@/component/shared/tooltip';
import ProgressBar from '@/component/shared/progressbar/ProgressBar';

const SuggestModalCard: React.FC = () => {
  // Suggest_Profile_Card Start
  return (
    // Suggest_Profile_Card Start
    <div className={styles.Cardcontainer}>
      <div className={styles.Userprofile}>
        <div className={styles.Usercard}>
          <Image
            src='/assets/images/Suggest.png'
            alt=''
            width={80}
            height={80}
            className={styles.Profileimg}
          />
          <div className={styles.Profile}>
            <h5>Bilal Kazmi</h5>
            <p>UX Designer @ Google</p>
            <p className={styles.Locationchange}>
              <span className={styles.Location}>
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
          tertiaryButtonClassName={styles.Followaccount}
          sizeVariant='base'
        />
      </div>
      {/* // Suggest_Profile_Card End */}
      <hr className={styles.Separator} />

      {/* Card_Section_2 Start */}
      <div className={styles.Bussinessimpact}>
        <div className={styles.Impacttitle}>
          <div className={styles.Bussinessalert}>
            <h5> BUSINESS IMPACT SCORE</h5>
            <Tooltip />
          </div>
          <p>Average Impact</p>
        </div>
        <div className={styles.Scores}>
          <div className={styles.Score}>
            <span>Short Term</span>
            <ProgressBar />
          </div>
          <div className={styles.Score}>
            <span>Long Term</span>
            <ProgressBar />
          </div>
        </div>
      </div>
      {/* Card_Section_2 End */}
    </div>
  );
};

export default SuggestModalCard;
