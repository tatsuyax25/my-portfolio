import Link from "next/link";

export default function Skills() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <section className="max-w-4xl w-full text-left mb-10">
        <h2 className="text-5xl font-bold mb-6 text-gray-800 text-center">
          My Skills
        </h2>

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            At General Assembly, I learned and utilized a variety of tech stacks
            and tools, which include:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-800">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>NPM</li>
            <li>Bootstrap</li>
            <li>Materialize CSS</li>
            <li>Nodemon</li>
            <li>Python</li>
            <li>Django</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JSON</li>
            <li>ESLint</li>
            <li>AWS</li>
            <li>Google Cloud</li>
            <li>Heroku</li>
            <li>OAuth</li>
            <li>Postman</li>
            <li>Homebrew</li>
            <li>Babel</li>
            <li>Markdown</li>
            <li>Codepen</li>
            <li>Replit</li>
            <li>Slack</li>
            <li>Stackoverflow</li>
            <li>Trello</li>
            <li>VSCode</li>
            <li>Apple</li>
            <li>XD</li>
          </ul>
        </div>

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            At Westwood College, I learned and utilized a variety of tech stacks
            and tools, which include:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 list-disc list-inside text-gray-800">
            <li>3ds Max</li>
            <li>After Effects</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>

        <div className="mb-10 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            I am expanding my knowledge and skills by learning additional tech
            stacks and tools:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside text-gray-800">
            <li>Angular</li>
            <li>Apache</li>
            <li>Astro</li>
            <li>Blender</li>
            <li>C++</li>
            <li>C#</li>
            <li>DBeaver</li>
            <li>Dreamweaver</li>
            <li>Figma</li>
            <li>GitLab</li>
            <li>GitPod</li>
            <li>GraphQL</li>
            <li>IntelliJ</li>
            <li>Java</li>
            <li>Jet Brains</li>
            <li>JQuery</li>
            <li>Jupyter</li>
            <li>Kotlin</li>
            <li>Maven</li>
            <li>Maya</li>
            <li>MySQL</li>
            <li>Netlify</li>
            <li>Next.js</li>
            <li>Notion</li>
            <li>Premiere Pro</li>
            <li>Prisma</li>
            <li>Railway</li>
            <li>Redux</li>
            <li>Spring</li>
            <li>SQLite</li>
            <li>Swift</li>
            <li>Tailwind CSS</li>
            <li>TypeScript</li>
            <li>Unity</li>
            <li>Unreal Engine</li>
            <li>Vercel</li>
            <li>Visual Studio</li>
            <li>ViteJS</li>
            <li>Xamarin</li>
            <li>XCode</li>
            <li>XD</li>
            <li>Yarn</li>
          </ul>
        </div>
        <div className="flex justify-center mt-4">
          <Link href="/projects">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-lg sm:text-xl md:text-2xl hover:bg-blue-700">
              View My Projects
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
