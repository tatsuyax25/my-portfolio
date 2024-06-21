import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="max-w-4xl w-full text-center md:text-left mb-10 flex flex-wrap items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
          <div className="relative h-60 w-60 md:h-80 md:w-80 rounded-full overflow-hidden">
            <Image
              src="/HeroImage.jpg" // Replace with your image filename
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <h2 className="text-5xl font-bold mb-6 text-gray-800">About Me</h2>
          <div className="text-lg text-gray-700 mb-6">
            <p>
              Hi, I’m Miguel, and I am a 1st-generation, Latino Software
              Engineer with an interest in all things artistic and a passion for
              working with game design and effectiveness. Before beginning my
              transition to software engineering, I worked in both in-store and
              online retail as a technical support specialist in e-commerce.
              Simultaneously, I became a webmaster, taking care of the company’s
              website by updating and cleaning up the webpage in HTML and CSS to
              meet clients’ needs, which gave me a keen eye for detail and
              precision. As I’ve collaborated on apps related to productivity
              and efficiency, I’m looking forward to further developing my
              design and coding skills with my passion for gamification to build
              long-lasting resources for future generations to come.
            </p>
            <p>
              In my spare time, I like to watch comedy and action movies or get
              outdoors such as finding new hiking trails or seeing new sights.
              While at home, I would play video games and watch anime. I’m also
              a big sports fan: soccer, hockey, basketball, football, and
              baseball.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
