import { Profile } from '@/types/dropdownProfile';

export const getProfileImageUrl = (profile: Profile): string =>
  profile?.image || '/assets/images/Avatar.png';

export const getProfileTitle = (profile: Profile): string => profile?.title || 'No Title';

export const getProfileHeadline = (profile: Profile): string => {
  const subtitle = profile?.subtitle;
  if (subtitle) {
    return subtitle.split('•').pop()?.trim() || 'No Headline';
  }
  return 'No Headline';
};
