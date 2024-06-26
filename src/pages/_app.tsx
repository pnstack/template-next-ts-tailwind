import { ReactElement } from 'react';
import { Provider } from 'react-redux';

import AppContextProvider from '@/contexts/AppContext';
import { store } from '@/redux';
import { AppPropsWithLayout } from '@/types';

import '@/styles/globals.scss';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <AppContextProvider>
      <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
    </AppContextProvider>
  );
};
export default App;
