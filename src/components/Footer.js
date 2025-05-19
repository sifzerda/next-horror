import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-20 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4">

          {/* ================================================= */}
          <a
            href="https://react-td-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-white"
          >
            <Image src="/mammal.svg" alt="Mammal" width={16} height={16} />
            sifzerda
          </a>

          {/* ================================================= */}
          <a
            href="https://github.com/sifzerda/next-horror"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-white"
          >
            <Image src="/github.svg" alt="Github" width={16} height={16} />
            2025
          </a>
          {/* ================================================= */}
        </div>
      </div>
    </footer>

  );
}

export default Footer;
