import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/tour-packages">Tour Packages</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}