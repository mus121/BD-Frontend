import { Profile } from '@/types/dropdownProfile';

export const getProfileImageUrl = (profile: Profile): string =>
  profile?.entityLockupView?.image?.attributes[0]?.detailData.nonEntityProfilePicture?.vectorImage
    ?.artifacts[0]?.fileIdentifyingUrlPathSegment || '/assets/images/Avatar.png';

export const getProfileTitle = (profile: Profile): string =>
  profile?.entityLockupView?.title?.text || 'No Title';

export const getProfileHeadline = (profile: Profile): string => {
  const subtitle = profile?.entityLockupView?.subtitle?.text;
  if (subtitle) {
    return subtitle.split('•').pop()?.trim() || 'No Headline';
  }
  return 'No Headline';
};
