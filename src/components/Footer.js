import { exportTraceState } from "next/dist/trace";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400 mt-auto pl-64">
      {/* pl-64 accounts for sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image src="/file.svg" alt="Learn" width={16} height={16} />
            Learn
          </a>
          <a
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image src="/window.svg" alt="Templates" width={16} height={16} />
            Templates
          </a>
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Image src="/globe.svg" alt="Next.js" width={16} height={16} />
            Next.js
          </a>
        </div>
        <p className="mt-4 sm:mt-0">&copy; {new Date().getFullYear()} Your Project Name</p>
      </div>
    </footer>
  );
}

export default Footer;
