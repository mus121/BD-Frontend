import { useCallback, useRef, useEffect } from 'react';
import {
  sendextensionmessage,
  sendlinkedinprofile,
  sendconnectionProfile,
  sendtotalconnection,
  sendProfileSearch,
} from '../utils/index';
import { useAppDispatch, useAppSelector } from './rtk';
import { setIsExtensionInstalled } from '../store/slices/appslice';
import { setMiniProfile } from '../store/slices/miniProfilesSlice';

const useExtension = () => {
  const dispatch = useAppDispatch();
  const { isExtensionInstalled } = useAppSelector(state => state.app.extension);
  const intervalRef = useRef<number | null>(null);

  // Check Extension Install Or Not
  const pollCallback = useCallback(
    (res: { signal: boolean }) => {
      if (res && res.signal && !isExtensionInstalled) {
        dispatch(setIsExtensionInstalled(true));
      } else if (!res && isExtensionInstalled) {
        dispatch(setIsExtensionInstalled(false));
      }
    },
    [isExtensionInstalled, dispatch],
  );
  // Response Fetch Profile
  const pollCallbackData = useCallback((res: { response: any }) => {
    if (res?.response) {
      dispatch(setMiniProfile(res.response));
    }
  }, []);

  const handleCheckExtension = useCallback(() => {
    sendextensionmessage<{ signal: boolean }>('MESSAGE', pollCallback);
  }, [pollCallback]);

  const handleLinkedProfile = useCallback(() => {
    sendlinkedinprofile<{ response: any }>('LINKEDINPROFILE', pollCallbackData);
  }, [pollCallbackData]);

  useEffect(() => {
    if (intervalRef.current === null) {
      handleCheckExtension();
      handleLinkedProfile();
      const newIntervalId = window.setInterval(handleCheckExtension, 5000);
      intervalRef.current = newIntervalId;
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [handleCheckExtension, handleLinkedProfile]);
};
export default useExtension;

export const getMutualConnections = (setState: any, start: number = 0) => {
  sendconnectionProfile<{ response: any }>('LINKEDCONNECTION', start, response => {
    setState(response);
  });
};

export const getTotalConnections = (setState: any) => {
  sendtotalconnection<{ response: any }>('LINKEDTOTALCONNECTION', response => {
    setState(response);
  });
};

export const getProfileSearch = (searchTerm: string, setState: (response: any) => void) => {
  sendProfileSearch<{ response: any }>('SEARCHPROFILE', searchTerm, response => {
    if (response.error) {
      return setState(null);
    }
    return setState(response);
  });
};
