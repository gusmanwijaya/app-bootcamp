import Navbar from "../Navbar";
import Hero from "../Hero";
import HeaderImage from "../HeaderImage";

export default function Header() {
  return (
    <header className="header bg-navy">
      <Navbar />
      <Hero />
      <HeaderImage />
    </header>
  );
}
