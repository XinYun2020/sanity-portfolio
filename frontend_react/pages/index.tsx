import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
} from "../src/container/index";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center xjustify-center px-20 text-center h-screen">
        <div className="py-8"></div>
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </main>
      {/* 
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
