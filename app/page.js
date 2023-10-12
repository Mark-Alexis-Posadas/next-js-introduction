import Link from "next/link";
export default function Home() {
  return (
    <section className="text-center">
      <h1>Home Page</h1>
      <ul className="flex align-center justify-center">
        <li>
          <Link href="/" className="me-2">
            Home
          </Link>
          <Link href="/about" className="me-2">
            About
          </Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </section>
  );
}
