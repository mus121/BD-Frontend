import { DropDownProfiles } from '@/types/TDropDownProfiles';

export const getProfileImageUrl = (profile: DropDownProfiles): string =>
  profile?.image || '/assets/images/Avatar.png';

export const getProfileTitle = (profile: DropDownProfiles): string => profile?.title || 'No Title';

export const getProfileHeadline = (profile: DropDownProfiles): string => {
  const subtitle = profile?.subtitle;
  if (subtitle) {
    return subtitle.split('•').pop()?.trim() || 'No Headline';
  }
  return 'No Headline';
};
