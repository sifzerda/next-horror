import Image from "next/image";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      <Header />
      <Navigation />
      {/* Main content wrapper */}
      <div className="flex flex-col sm:flex-row pt-28">
        {/* Sidebar with natural height */}
        <aside role="complementary" aria-label="Sidebar" className="w-full sm:w-64 bg-gray-100 dark:bg-gray-900 p-6">
          <Sidebar />
        </aside>

        {/* Main content grows */}
       <main role="main" className="flex-1 p-4 sm:px-6 flex flex-col gap-8 items-center justify-center text-center sm:items-center sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
            sizes="(max-width: 640px) 100px, 180px"
          />

          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-mono">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.js
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white dark:bg-white dark:text-black gap-2 hover:bg-gray-700 dark:hover:bg-gray-200 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logo"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
      </div>

      {/* Footer below sidebar and main content */}
      <Footer />
    </div>
  );
}
