import { GlobalStateProvider } from "@/lib/contexts/global-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
      <Analytics />
    </GlobalStateProvider>
  );
}
