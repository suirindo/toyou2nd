import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  );
}
