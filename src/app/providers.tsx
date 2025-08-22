'use client';

import { Provider } from 'react-redux';

import AppContextProvider from '@/contexts/AppContext';
import { store } from '@/redux';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppContextProvider>
      <Provider store={store}>{children}</Provider>
    </AppContextProvider>
  );
}