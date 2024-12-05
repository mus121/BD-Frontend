import { sendProfileSearch } from '@/utils';

// export const getProfileSearch = (searchTerm: string, setState: (response: any) => void) => {
//   sendProfileSearch<{ response: any }>('SEARCHPROFILE', searchTerm, response => {
//     if (response.error) {
//       return setState(null);
//     }
//     return setState(response);
//   });
// };

export const getProfileSearch = async (
  searchTerm: string,
): Promise<{ response: any } | undefined> => {
  try {
    const result = await sendProfileSearch<{ response: any }>('SEARCHPROFILE', searchTerm);
    return result;
  } catch (error) {
    console.error('Error fetching profile search:', error);
    return undefined; // Return undefined in case of error
  }
};
