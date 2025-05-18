import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400">
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
    <div className="flex flex-wrap justify-center items-center gap-4">
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
  </div>
</footer>

  );
}

export default Footer;
