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
          href="/projects"
          className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700"
        >
          View My Projects
        </a>
      </section>

      <section className="max-w-4xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text2xl text-gray-600 mb-6">
          Hi, I’m Miguel, and I am a 1st-generation, Latino Software Engineer
          with an interest in all things artistic and a passion for working with
          game design and effectiveness. Before beginning my transition to
          software engineering, I worked in both in-store and online retail as a
          technical support specialist in e-commerce. Simultaneously, I became a
          webmaster, taking care of the company’s website by updating and
          cleaning up the webpage in HTML and CSS to meet clients’ needs, which
          gave me a keen eye for detail and precision. As I’ve collaborated on
          apps related to productivity and efficiency, I’m looking forward to
          further developing my design and coding skills with my passion for
          gamification to build long-lasting resources for future generations to
          come.
        </p>
        <p className="text-lg sm:text-xl md:text2xl text-gray-600 mb-6">
          In my spare time, I like to watch comedy and action movies or get
          outdoors such as finding new hiking trails or seeing new sights. While
          at home, I would play video games and watch anime. I’m also a big
          sports fan: soccer, hockey, basketball, football, and baseball.
        </p>
      </section>
    </main>
  );
}