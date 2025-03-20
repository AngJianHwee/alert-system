import '@fortawesome/fontawesome-free/css/all.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AlertList from '@/components/AlertList';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AlertList />
      <Component {...pageProps} />;
    </div>
  );
}
