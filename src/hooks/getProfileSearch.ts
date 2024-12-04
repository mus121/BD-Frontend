import { sendProfileSearch } from '@/utils';

export const getProfileSearch = (searchTerm: string, setState: (response: any) => void) => {
  sendProfileSearch<{ response: any }>('SEARCHPROFILE', searchTerm, response => {
    if (response.error) {
      return setState(null);
    }
    return setState(response);
  });
};
