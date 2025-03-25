export const truncateHeadline = (headline: string, maxLength: number = 30): string => {
  if (!headline) return 'No headline available';
  const lastPart = headline.split('•').pop()?.trim() || '';
  return lastPart.length > maxLength ? `${lastPart.slice(0, maxLength)}...` : lastPart;
};

export const truncateHeadlineSelected = (headline: string, maxLength: number = 30): string => {
  if (!headline) return 'No headline available';
  const lastPart = headline.split('•').pop()?.trim() || '';
  return lastPart.length > maxLength ? `${lastPart.slice(0, maxLength)}...` : lastPart;
};
