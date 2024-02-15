import Head from "next/head";
import { Contact } from "../components/Contact"
import { Nav } from "../components/Nav";
import Footer from '@/components/Footer';


export default function AbooutIDMS() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/images/favicon.ico"
        />
        <title>Contact | Open Knowledge Nepal</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Contact />
      <Footer />
    </>
  );
}
