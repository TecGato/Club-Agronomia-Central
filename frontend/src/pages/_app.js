import Head from 'next/head';
import '@/styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/x-data-grid';
import { esES as coreesES } from '@mui/material/locale';
import { SessionProvider } from 'next-auth/react';

const theme = createTheme(esES, coreesES);

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <meta
            name="description"
            content="Club Deportido del barrio para el barrio"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
