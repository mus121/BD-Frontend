export const extractProfilePicture = (imageData: any): string => {
  const artifacts =
    imageData?.attributes[0]?.detailData?.nonEntityProfilePicture?.vectorImage?.artifacts;
  return artifacts?.[0]?.fileIdentifyingUrlPathSegment || '';
};
