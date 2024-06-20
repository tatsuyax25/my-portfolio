import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex flex-wrap gap-4'>
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="text-white">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-white">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}