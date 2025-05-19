// src/app/home.js
import Layout from '../components/Layout';
import Image from "next/image";

function Home() {
  return (
    <Layout>
      {/* 1st Banner Box */}
      <div className="bg-transparent border border-white text-white rounded-t-md rounded-b-none px-6 pt-4 pb-4 w-full max-w-screen-xl mx-auto shadow">
        <h1 className="font-amatic-sc text-xl font-semibold mb-2 text-center">About</h1>

        <blockquote className="text-sm italic mb-2">
          “We shall see that at which dogs howl in the dark, and that at which cats prick up their ears after midnight.”
          <br />
          <span className="font-rubik block text-right font-medium mt-1">— H. P. Lovecraft</span>
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
          <h3 className="text-xl font-bold mb-2">About</h3>

          <h2 id="home">Home</h2>

          <p className="text-sm mb-4 font-rubik">
            This is a smaller sibling blog to my other site Fiction Map. It's a resource
            for writers looking to improve their craft and write scarier, better horror stories.
          </p>

          <p className="text-sm mb-4 font-rubik">
            Horror is a special genre. It is definable by what it does not possess:
            clear plot goals, antagonists, positive themes, tidy resolutions, and happy endings.

            If a reader is left with an overall sense of dread, confusion, bewilderment and upset, according
            to other genres, the story is a failure...
          </p>

          <p className="text-sm mb-4 font-rubik">
            ...Except for horror, where this is the goal.
          </p>

          <p className="text-sm mb-4 font-rubik">
           Special storytelling rules apply to horror, which are covered in this blog. I hope you find it useful!
          </p>

          <h2 id="blog">Blog</h2>

          <p className="text-sm font-rubik">
            Below are key elements often used in horror storytelling to enhance tension and unsettle the audience.
          </p>

          <h2 id="contact">Contact</h2>
          <p className="text-sm font-rubik">
            Below are key elements often used in horror storytelling to enhance tension and unsettle the audience.
          </p>

        </div>

      </section>

    </Layout>
  );
}

export default Home;
