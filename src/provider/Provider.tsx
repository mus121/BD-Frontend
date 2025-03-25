'use client';

import { Provider } from 'react-redux';
import { store } from '../store/store';
import Extensionsignal from '../components/extensionSignal/index';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Extensionsignal />
      {children}
    </Provider>
  );
}
