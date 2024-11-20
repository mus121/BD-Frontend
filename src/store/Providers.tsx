'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import Extensionsignal from '../component/Extensionsignal/index';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Extensionsignal />
      {children}
    </Provider>
  );
}
export default Providers;
