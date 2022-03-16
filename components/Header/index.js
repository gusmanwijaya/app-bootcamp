import Navbar from "../Navbar";
import Hero from "../Hero";
import HeaderImage from "../HeaderImage";

export default function Header() {
  return (
    <header className="header bg-navy">
      <Navbar isAuthPage={false} isLogin={false} />
      <Hero />
      <HeaderImage />
    </header>
  );
}
