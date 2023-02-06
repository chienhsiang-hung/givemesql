import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-EB1W4TXEV1" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
