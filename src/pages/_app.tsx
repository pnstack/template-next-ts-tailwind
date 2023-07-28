import AppContextProvider from '@/contexts/AppContext';
import '@/styles/globals.scss';
import { AppPropsWithLayout } from '@/types';
import { ReactElement } from 'react';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return <AppContextProvider>{getLayout(<Component {...pageProps} />)}</AppContextProvider>;
};
export default App;
