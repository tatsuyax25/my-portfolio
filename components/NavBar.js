import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="text-white">About</a>
          </Link>
        </li>
        <li>
          <Link href="/skills">
            <a className="text-white">Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a className="text-white">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="text-white">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}