import { Roboto } from "next/font/google";
import "./globals.css";
// import local from "next/font/local";

// const basel = local({
//   src: [
//     {
//       path: "../",
//       weight: "800",
//     },
//   ],
//   variable: "--font-deacon",
// });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Maverick Protocol",
  description: "Maverick Protocol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
