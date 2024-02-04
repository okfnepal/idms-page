import "@/styles/global.css"; // Adjust the path to your global CSS file
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp