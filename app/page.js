export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="text-center mb-10">
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
