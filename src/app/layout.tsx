'use client';
import localFont from 'next/font/local';
import './globals.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import BaseModal from '@/components/modals/base-modal';
import dynamic from 'next/dynamic';
const AddFriendModal = dynamic(
  () => import('@/components/chat-list/modals/add-friend-modal'),
  {
    ssr: false,
  },
);
const AddGroupModal = dynamic(
  () => import('@/components/chat-list/modals/add-group-modal'),
  {
    ssr: false,
  },
);

export const lexendFont = localFont({
  src: [
    {
      path: './fonts/Figtree-Light.ttf',
      weight: '200',
      style: 'light', //weight 200
    },
    {
      path: './fonts/Figtree-Regular.ttf',
      weight: '400',
      style: 'regular', //weight 400
    },
    {
      path: './fonts/Figtree-Medium.ttf',
      weight: '500',
      style: 'medium', //weight 500
    },
    {
      path: './fonts/Figtree-Bold.ttf',
      weight: '700',
      style: 'bold', //weight 700
    },
    {
      path: './fonts/Figtree-ExtraBold.ttf',
      weight: '800',
      style: 'extrabold', //weight 800
    },
    {
      path: './fonts/Figtree-Black.ttf',
      weight: '900',
      style: 'black', //weight 900
    },
  ],
});

export const inconsolataFont = localFont({
  src: './fonts/Inconsolata-Black.ttf',
  weight: '900',
  style: 'black',
});

const theme = createTheme({
  typography: {
    fontFamily: lexendFont.style.fontFamily,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="">
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            {children}
            <BaseModal />
            <AddFriendModal />
            <AddGroupModal />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
