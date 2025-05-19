// src/app/scary words.js
import Layout from '../../components/Layout';
import Image from "next/image";

function Techniques() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="bg-transparent border border-white text-white rounded-t-md rounded-b-none px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto shadow">
        <h1 className="font-amatic-sc text-xl font-semibold mb-2 text-center">Techniques</h1>

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

      {/* New Section Below Banners */}
      <section className="w-full max-w-screen-xl mx-auto mt-10 px-4 text-white flex gap-4">
        {/* Text Column */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">About the Techniques</h3>
          <p className="text-sm mb-4 font-rubik">
            These horror techniques leverage language, pacing, and atmosphere to provoke emotional and psychological responses.
            Carefully chosen words and imagery distort what’s familiar, creating unease and suspense in the reader’s mind.
          </p>
          <p className="text-sm font-rubik">
            Below are key elements often used in horror storytelling to enhance tension and unsettle the audience.
          </p>
        </div>

        {/* Vertical Boxes on the Right */}
<div className="flex flex-col gap-4">
  <div className="w-32 bg-white text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
    <div className="font-semibold mb-1">About</div>
    <p className="text-xs mt-1">Learn more about our story and mission.</p>
  </div>

  <div className="w-32 bg-white text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
    <div className="font-semibold mb-1">Index</div>
    <ul className="flex flex-col list-disc list-inside text-xs leading-tight">
      <li className="mb-px">Home</li>
      <li className="mb-px">Blog</li>
      <li className="mb-px">Contact</li>
    </ul>
  </div>

  <div className="w-32 bg-white text-black flex flex-col items-start justify-center rounded shadow p-4 text-left">
    <div className="font-semibold mb-1">Also See</div>
    <ul className="flex flex-col list-disc list-inside text-xs leading-tight">
      <li className="mb-px">Resources</li>
      <li className="mb-px">FAQ</li>
      <li className="mb-px">Support</li>
    </ul>
  </div>
</div>

      </section>

    </Layout>
  );
}

export default Techniques;
