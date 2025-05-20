// src/app/techniques.js
import { auth } from "../../auth.ts";
import Layout from '../../components/Layout';
import CommentForm from '../../components/CommentForm';
import CommentList from '../../components/CommentList';
import Image from "next/image";

async function Techniques() {
  const session = await auth();
  console.log("🧪 Server SESSION:", session);
  const userId = session?.user?.id || null;
  console.log("🧠 Extracted userId:", userId);

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

          <h2 id="home">Home</h2>

          <p className="text-sm mb-4 font-rubik">
            These horror techniques leverage language, pacing, and atmosphere to provoke emotional and psychological responses.
            Carefully chosen words and imagery distort what’s familiar, creating unease and suspense in the reader’s mind.
          </p>

          <h2 id="blog">Blog</h2>

          <p className="text-sm font-rubik">
            Below are key elements often used in horror storytelling to enhance tension and unsettle the audience.
          </p>

          <h2 id="contact">Contact</h2>

          {/* Back to Top Link */}
          <a href="#" className="mt-6 inline-block px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-200 transition">Back to Top</a>


          <h1 className="text-2xl font-bold mb-4">Leave a Comment</h1>
          {userId ? (
            <>
              {console.log("✅ Rendering CommentForm for user:", userId)}
              <CommentForm userId={userId} />
            </>
          ) : (
            <>
              {console.log("🚫 User not logged in or no user ID found")}
              <p className="text-red-500">Please log in to leave a comment.</p>
            </>
          )}

          <CommentList />

        </div>

        {/* Vertical Boxes on the Right */}
        <div className="flex flex-col gap-4">
          {/* About Box */}
          <div className="w-36 bg-gray-800 border border-white text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">About</div>
            <p className="font-source-code-pro text-xs mt-1">Learn more about our story and mission.</p>
          </div>

          {/* Index Box */}
          <div className="w-36 bg-gray-800 border border-white text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">Index</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="#home" className="hover:underline">Home</a>
              </li>
              <li className="mb-px">
                <a href="#blog" className="hover:underline">Blog</a>
              </li>
              <li className="mb-px">
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ol>
          </div>

          {/* Also See Box */}
          <div className="w-36 bg-gray-800 border border-white text-white flex flex-col items-start justify-center rounded shadow p-4 text-left">
            <div className="font-semibold mb-1 text-red-500">Also See</div>
            <ol className="font-source-code-pro flex flex-col list-disc list-inside text-xs leading-tight">
              <li className="mb-px">
                <a href="/types" className="hover:underline">Types</a>
              </li>
              <li className="mb-px">
                <a href="/scarywords" className="hover:underline">Scary Words</a>
              </li>
              <li className="mb-px">
                <a href="/tropes" className="hover:underline">Tropes</a>
              </li>
            </ol>
          </div>

        </div>


      </section>

    </Layout>
  );
}

export default Techniques;
