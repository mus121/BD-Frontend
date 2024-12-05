import { sendconnectionProfile } from '@/utils';

// export const getMutualConnections = (setState: any, start: number = 0) => {
//   sendconnectionProfile<{ response: any }>('LINKEDCONNECTION', start, response => {
//     setState(response);
//   });
// };

export const getMutualConnections = async (start: number = 0) => {
  try {
    const result = await sendconnectionProfile<{ response: any }>('LINKEDCONNECTION', start);

    const { response } = result;
    console.log('Res', response);

    if (!response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return response; // Return the response data
  } catch (error) {
    console.error('Error fetching mutual connections:', error);
    throw error;
  }
};
