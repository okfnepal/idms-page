import Head from "next/head";
import { StaticContents } from "../components/StaticContents"
import { Nav } from "../components/Nav";
import { Readings } from '@/components/Readings';
import Footer from '@/components/Footer';



export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/images/favicon.ico"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <StaticContents />
      <Readings />
      <Footer />
    </>
  );
}
