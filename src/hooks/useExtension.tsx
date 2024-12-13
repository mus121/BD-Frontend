import { useCallback, useRef, useEffect } from 'react';
import { ExternalMessageEnum } from '@/constants/common';
import { extensionMessage, liProfile } from '@/utils/index';
import { TMiniProfile } from '@/types/TMiniprofile';
import { useAppDispatch, useAppSelector } from './rtk';
import { setIsExtensionInstalled } from '../store/slices/appslice';
import { setMiniProfile } from '../store/slices/miniProfilesSlice';

const useExtension = () => {
  const dispatch = useAppDispatch();
  const isExtensionInstalled = useAppSelector(state => state.app.extension.isExtensionInstalled);
  const intervalRef = useRef<number | null>(null);

  // Poll Extension Status
  const pollExtensionStatus = useCallback(async () => {
    try {
      const response = await extensionMessage<{ signal: boolean }>(ExternalMessageEnum.MESSAGE);
      const isInstalled = response?.signal || false;

      if (isInstalled !== isExtensionInstalled) {
        dispatch(setIsExtensionInstalled(isInstalled));
      }
    } catch (error) {
      console.error('Error checking extension status:', error);
    }
  }, [isExtensionInstalled, dispatch]);

  // Fetch LinkedIn Profile Data
  const fetchLinkedProfile = useCallback(async () => {
    try {
      const response = await liProfile<TMiniProfile>(ExternalMessageEnum.LI_PROFILE);
      if (response?.response) {
        dispatch(setMiniProfile(response.response));
      }
    } catch (error) {
      console.error('Error fetching LinkedIn profile:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    // Start polling and fetch data
    pollExtensionStatus();
    fetchLinkedProfile();

    if (intervalRef.current === null) {
      intervalRef.current = window.setInterval(pollExtensionStatus, 5000);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [pollExtensionStatus, fetchLinkedProfile]);

  return { pollExtensionStatus, fetchLinkedProfile };
};

export default useExtension;
