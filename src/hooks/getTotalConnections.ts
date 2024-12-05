import { sendtotalconnection } from '@/utils';

// export const getTotalConnections = (setState: any) => {
//   sendtotalconnection<{ response: any }>('LINKEDTOTALCONNECTION', response => {
//     setState(response);
//   });
// };

export const getTotalConnections = async (): Promise<void> => {
  try {
    const result = await sendtotalconnection<{ response: any }>('LINKEDTOTALCONNECTION');

    // Adjust based on the actual structure of the result
    const { response } = result as any;

    if (!response) {
      throw new Error('Response property is missing in the resolved result.');
    }

    return response;
  } catch (error) {
    console.error('Error fetching total connections:', error);
    throw error;
  }
};
