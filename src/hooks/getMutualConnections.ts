import { sendconnectionProfile } from '@/utils';

export const getMutualConnections = (setState: any, start: number = 0) => {
  sendconnectionProfile<{ response: any }>('LINKEDCONNECTION', start, response => {
    setState(response);
  });
};
