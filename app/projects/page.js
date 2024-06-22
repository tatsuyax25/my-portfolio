import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Plantivity",
    description:
      "Plantivity motivates users by completing their daily self-care tasks and rewarding them with a badge. They assign themselves their three daily tasks and points, which help your self-care plant grow!",
    projectUrl: "https://plantivity.netlify.app",
    githubUrl: "https://github.com/tatsuyax25/team6-hackathon-fe",
    image: "/images/plantivity.png",
  },
  {
    title: "Snake Web Game JS",
    description:
      "Navigate the snake to eat food, avoid walls and its own body, and achieve the highest score possible. Each piece of food increases the snake's length, adding to the challenge.",
    projectUrl: "https://snake-web-game-js.netlify.app",
    githubUrl: "https://github.com/tatsuyax25/snake-game-js",
    image: "/images/snakeWebGameJS.png",
  },
  {
    title: "Connect 4 Web Game",
    description:
      "Connect 4 is played against the computer. Each player takes turns to drop a color checker into the grid. To win, a player must get four duplicate color checkers in a row. A winning row combination can be horizontal, vertical, or diagonal.",
    projectUrl: "https://connect-four-web-game.netlify.app",
    githubUrl: "https://github.com/tatsuyax25/connect-four",
    image: "/images/ConnectFour2.png",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-gray-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md mb-4"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <Link href={project.projectUrl} passHref>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </button>
                </Link>
                <Link href={project.githubUrl} passHref>
                  <button
                    className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Code
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/contact">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}