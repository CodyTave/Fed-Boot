import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { Logo } from "./assets";
function App() {
  return (
    <>
      <div className="grid gap-32">
        <Navbar Logo={Logo} />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
