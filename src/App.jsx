import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#371f74] via-[#000000] to-[#b89cff] bg-[length:200%_200%] animate-background-scroll" />
        <div className="container mx-auto px-8 relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </div>
    </div>
  );
};

export default App;
