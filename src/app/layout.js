import { 
  Geist, 
  Geist_Mono, 
  Amatic_SC, 
  Rubik, 
  Source_Code_Pro 
} from "next/font/google";
import "../../styles/globals.css";

import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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
      <body className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
        <Header />
        <Navigation />

        <div className="flex flex-col sm:flex-row pt-28">
          <aside className="w-full sm:w-64 bg-gray-100 dark:bg-gray-900 p-6">
            <Sidebar />
          </aside>

          <main className="flex-1 p-4 sm:px-6 flex flex-col gap-8 items-center sm:items-start pb-28">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}