import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClassGrid from "./components/ClassGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ClassGrid />
        <Contact />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Rhythm Dance Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#classes" className="text-gray-600 hover:text-gray-900">Classes</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
