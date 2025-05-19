import { 
  Geist, 
  Geist_Mono, 
  Amatic_SC, 
  Rubik, 
  Source_Code_Pro 
} from "next/font/google";
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

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-source-code-pro',
});

export const metadata = {
  title: "The Horror Map",
  description: "Tips and Techniques for Horror Fiction Writing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${amatic.variable} 
        ${rubik.variable} 
        ${sourceCodePro.variable} 
        antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
