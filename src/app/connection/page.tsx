'use client';

import ConnectionProfile from '@/component/connection';
import SelectedProfile from '@/component/selectedConnection';
import ProfileLabels from '@/component/profileLabels/index';
import { useAppSelector } from '@/hooks/rtk';

export default function Connection() {
  const currentStep = useAppSelector(state => state.stepComponent.currentStep);

  if (currentStep == 0) {
    return <ConnectionProfile />;
  } else if (currentStep == 1) {
    return <SelectedProfile />;
  } else if (currentStep == 2) {
    return <ProfileLabels />;
  }
}
