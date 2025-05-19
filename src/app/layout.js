import { Geist, Geist_Mono, Amatic_SC, Rubik } from "next/font/google";
import "../../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-amatic-sc',
});

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500'], 
  variable: '--font-rubik',
});

export const metadata = {
  title: "The Horror Map",
  description: "Tips and Techniques for Horror Fiction Writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amatic.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
