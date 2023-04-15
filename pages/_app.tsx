import '@/styles/globals.css';
import '@/styles/main_page.css';
import '@/styles/layout.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import type { AppProps } from 'next/app';

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}
