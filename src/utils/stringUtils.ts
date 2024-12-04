export const truncateHeadline = (headline: string, maxLength: number = 70): string => {
  if (!headline) return 'No headline available';
  const lastPart = headline.split('•').pop()?.trim() || '';
  return lastPart.length > maxLength ? `${lastPart.slice(0, maxLength)}...` : lastPart;
};
