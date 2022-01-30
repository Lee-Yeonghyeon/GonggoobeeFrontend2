import type { AppProps } from 'next/app'
import Header from '../components/Header'
import '../styles/fonts/notosans.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
