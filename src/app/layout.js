import { Roboto } from "next/font/google";
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'
import "./globals.css";
import { WagmiContextProvider } from "./providers/wagmi";
import { config } from './config'


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Maverick Protocol",
  description: "Maverick Protocol",
};

export default function RootLayout({ children }) {
  // const initialState = cookieToInitialState(config, headers().get('cookie'));
  return (
    <html lang="en">
      <body className={roboto.className}>
        <WagmiContextProvider>
        {/* <WagmiContextProvider initialState={initialState}> */}
          {children}
        </WagmiContextProvider>
      </body>
    </html>
  );
}
