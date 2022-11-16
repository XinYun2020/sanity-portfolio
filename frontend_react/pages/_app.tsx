import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../src/components/index";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="bg-slate-100 w-full h-full">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
