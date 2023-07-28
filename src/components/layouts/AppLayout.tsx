import { createLayout } from '@/utils';
import React, { PropsWithChildren } from 'react';
import Header from './Header';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <main className='flex-1 flex'>{children}</main>
    </div>
  );
};

export default AppLayout;

export const getAppLayout = createLayout(AppLayout);
