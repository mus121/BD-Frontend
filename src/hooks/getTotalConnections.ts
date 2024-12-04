import { sendtotalconnection } from '@/utils';

export const getTotalConnections = (setState: any) => {
  sendtotalconnection<{ response: any }>('LINKEDTOTALCONNECTION', response => {
    setState(response);
  });
};
