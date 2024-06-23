import Image from "next/image";
import Link from "next/link";

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
              Hello! I'm a Software Engineer with a deep-rooted passion for the
              intersection of technology and creativity, particularly within the
              game industry. My journey began in e-commerce, where I provided
              technical support and served as a webmaster, refining websites
              with precision and an eye for detail.
            </p>
            <p>
              My experiences have cultivated a strong foundation in HTML and CSS
              and a customer-centric approach to problem-solving. But it's not
              just about the code - it's about the impact. I'm fascinated by the
              potential of technology in diverse fields such as healthcare,
              aviation, robotics, climate change, and space exploration.
            </p>
            <p>
              Today, I'm channeling my passion for gamification and my broad
              tech interests into creating innovative software solutions. I'm
              excited to leverage my skills and curiosity to contribute to
              meaningful advancements in these sectors. I believe in the power
              of technology to shape our future, and I'm ready to be part of
              that journey.
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <Link href="/skills">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700">
                View My Skills
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
