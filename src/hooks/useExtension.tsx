import { useCallback, useRef, useEffect } from 'react';
import { sendextensionmessage, sendlinkedinprofile, sendconnectionProfile } from '../utils/index';
import { useAppDispatch, useAppSelector } from './rtk';
import { setIsExtensionInstalled } from '../store/slices/appslice';
import { setMiniProfile } from '../store/slices/miniProfilesSlice';
import { setConnectionProfile } from '../store/slices/profileConnections';

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

  // Profile Connections
  const pollCallbackProfile = useCallback((res: { response: any }) => {
    if (res?.response) {
      console.log('LinkedIn Connection Profile Data:', res.response);
      dispatch(setConnectionProfile(res.response));
    }
  }, []);

  const handleCheckExtension = useCallback(() => {
    sendextensionmessage<{ signal: boolean }>('MESSAGE', pollCallback);
  }, [pollCallback]);

  const handleLinkedProfile = useCallback(() => {
    sendlinkedinprofile<{ response: any }>('LINKEDINPROFILE', pollCallbackData);
  }, [pollCallbackData]);

  // Linkedin Connections
  const handleLinkedinConnections = useCallback(() => {
    sendconnectionProfile<{ response: any }>('LINKEDCONNECTION', pollCallbackProfile);
  }, [pollCallbackProfile]);

  useEffect(() => {
    if (intervalRef.current === null) {
      handleCheckExtension();
      handleLinkedProfile();
      handleLinkedinConnections();
      const newIntervalId = window.setInterval(handleCheckExtension, 5000);
      intervalRef.current = newIntervalId;
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [handleCheckExtension, handleLinkedProfile, handleLinkedinConnections]);
};
export default useExtension;

export const getMutualConnections = (setState: any) => {
  sendlinkedinprofile<{ response: any }>('LINKEDCONNECTION', response => {
    setState(response);
  });
};
