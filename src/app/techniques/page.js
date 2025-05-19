// src/app/scary words.js
import Layout from '../../components/Layout';
import Image from "next/image";

function Techniques() {
  return (
    <Layout>
        {/* 1st Banner Box */}
        <div className="bg-transparent border border-white text-white rounded-t-md rounded-b-none px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto shadow">
          <h2 className="font-amatic-sc text-xl font-semibold mb-2 text-center">Techniques</h2>

          <blockquote className="text-sm italic mb-2">
            “It is a mistake to fancy that horror is associated inextricably with darkness, silence, and solitude.”
            <br />
            <span className="font-rubik block text-right font-medium mt-1">— H. P. Lovecraft</span>
          </blockquote>

          <blockquote className="text-sm italic">
            “More disturbing than the unknown is a distortion of the familiar.”
            <br />
            <span className="font-rubik block text-right font-medium mt-1">— Magic: The Gathering</span>
          </blockquote>
        </div>

        {/* 2nd Banner Box with Image */}
        <div className="bg-transparent border border-white rounded-b-md overflow-hidden w-full max-w-screen-xl mx-auto shadow -mt-8">
          <Image
            src="/your-image.jpg" // Replace with actual path
            alt="Atmospheric horror background"
            width={1600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

      <h1 className="text-2xl font-bold mt-6 mb-4">Techniques</h1>
      <p>If you have questions, please reach out!</p>
    </Layout>
  );
}

export default Techniques;
