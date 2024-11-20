'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/hooks/rtk';
import styles from './styles.module.scss';
import Home from '../common/svg/Home';
import Location from '../common/svg/Location';
import PrimaryButton from '../shared/button/PrimaryButton';
import SecondaryButton from '../shared/button/SecondaryButton';
import Check from '../shared/checkbox/enable/enable';

function LinkedinProfile() {
  const miniProfile = useAppSelector(state => state.profile.miniProfile);
  const imgUrl = miniProfile.picture['com.linkedin.common.VectorImage'].rootUrl
    ? `${miniProfile.picture['com.linkedin.common.VectorImage'].rootUrl}${miniProfile.picture['com.linkedin.common.VectorImage'].artifacts[0]?.fileIdentifyingUrlPathSegment}`
    : '';
  const router = useRouter();
  const followprofile = () => {
    router.push('/dashboard/follow');
  };
  return (
    <div className={styles.Profilecard}>
      <div className={styles.Profilecontent}>
        <div className={styles.Profiledata}>
          <h5 className={styles.Title}>LinkedIn Profile Confirmation</h5>
          <p className={styles.Description}>
            We detected a LinkedIn profile associated with this browser. To continue, please confirm
            if this is the correct profile to link with your account.
          </p>

          {/* LinkedIn Card Start */}
          <div className={styles.Linkedincard}>
            <div className={styles.Linkedin}>
              <Image
                src='/assets/images/linkedIn.png'
                width={16}
                height={16}
                alt='LinkedIn'
              />
              <h5 className={styles.Linkedheading}>LinkedIn</h5>
            </div>
            <div className={styles.Carddata}>
              <div className={styles.Usersimg}>
                {imgUrl && (
                  <Image
                    src={imgUrl}
                    width={48}
                    height={48}
                    alt='User'
                    className={styles.Userprofile}
                  />
                )}
              </div>
              <div className={styles.Head}>
                <h5>
                  {miniProfile.firstName} {miniProfile.lastName}
                </h5>
                <span>{miniProfile.occupation}</span>
              </div>
            </div>
            <div className={styles.CardLocation}>
              <div className={styles.Location}>
                <Location size={24} />
                <h5>Islamabad, Pakistan</h5>
              </div>
              <div className={styles.University}>
                <span className={styles.Home}>
                  <Home size={18} />
                </span>
                <h5>University of Calicut</h5>
              </div>
            </div>
          </div>
          {/* LinkedIn Card End */}

          <div className={styles.CheckOut}>
            <Check />
            <h5>
              I agree to download my LinkedIn contacts and understand this will securely store their
              information.
            </h5>
          </div>

          <div className={styles.Buttons}>
            <PrimaryButton
              text='Not My Profile'
              type='button'
              sizeVariant='base'
              colorVariant='orange'
              primaryButtonClassName={styles.Notprofile}
            />

            <SecondaryButton
              text='Confirm'
              type='button'
              sizeVariant='base'
              colorVariant='orange'
              secondaryButtonClassName={styles.Confirmbutton}
              onClick={followprofile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedinProfile;
