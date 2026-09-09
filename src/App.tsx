import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import Capabilities from "./components/sections/Capabilities";
import Benchmarks from "./components/sections/Benchmarks";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen bg-ground text-bone">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Benchmarks />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
