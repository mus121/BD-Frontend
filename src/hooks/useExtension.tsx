import { useCallback, useRef, useEffect } from 'react';
import { sendextensionmessage, sendlinkedinprofile } from '../utils/index';
import { useAppDispatch, useAppSelector } from './rtk';
import { setIsExtensionInstalled } from '../store/slices/appslice';
import { setMiniProfile } from '../store/slices/miniProfilesSlice';

const useExtension = () => {
  const dispatch = useAppDispatch();
  const { isExtensionInstalled } = useAppSelector(state => state.app.extension);
  const intervalRef = useRef<number | null>(null);

  // Check Extension Install or Not
  const pollExtensionStatus = useCallback(async () => {
    try {
      const res = await sendextensionmessage<{ signal: boolean }>('MESSAGE');
      if (res?.signal && !isExtensionInstalled) {
        dispatch(setIsExtensionInstalled(true));
      } else if (!res?.signal && isExtensionInstalled) {
        dispatch(setIsExtensionInstalled(false));
      }
    } catch (error) {
      console.error('Error checking extension status:', error);
    }
  }, [isExtensionInstalled, dispatch]);

  // Fetch Profile Data
  const fetchLinkedProfile = useCallback(async () => {
    try {
      const res = await sendlinkedinprofile<{ response: any }>('LINKEDINPROFILE');
      if (res?.response) {
        dispatch(setMiniProfile(res.response));
      }
    } catch (error) {
      console.error('Error fetching LinkedIn profile:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    // Initialize polling for extension status and LinkedIn profile
    if (intervalRef.current === null) {
      pollExtensionStatus();
      fetchLinkedProfile();
      const newIntervalId = window.setInterval(pollExtensionStatus, 5000);
      intervalRef.current = newIntervalId;
    }

    // Cleanup on component unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [pollExtensionStatus, fetchLinkedProfile]);
};

export default useExtension;
