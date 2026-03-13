import Link from "next/link";

export default function Header() {
  return (
    <header style={{ padding: 20, borderBottom: "1px solid #eee" }}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" style={{ textDecoration: "none", color: "black" }}>
          Comfort Studios — Finn Trost
        </Link>

        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}