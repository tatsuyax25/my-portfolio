import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="text-center mb-10">
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">
          Hi, I'm Miguel Urena, a Sotfware Engineer.
        </p>
        <a
          href="/about"
          className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700"
        >
          View My About Me
        </a>
      </section>
    </main>
  );
}
