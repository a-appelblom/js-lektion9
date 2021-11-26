import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          fontSize: "2rem",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
}
