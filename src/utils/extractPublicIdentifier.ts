export const extractPublicIdentifier = (publicIdentifier: string | undefined): string => {
  if (!publicIdentifier) return '';
  const parts = publicIdentifier.split('ww.linkedin.com/in/');
  if (parts.length > 1) {
    return parts[1].split(/[?#]/)[0];
  }
  return '';
};
