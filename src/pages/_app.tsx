import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {Desktop, Mobile} from '../components/design/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
