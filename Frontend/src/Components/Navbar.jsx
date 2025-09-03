import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track visible section using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              const formatted =
                id.charAt(0).toUpperCase() + id.slice(1);
              setActiveLink(
                formatted.replace(/([A-Z])/g, " $1").trim()
              );
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#060d17] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white font-bold text-lg px-2 py-1 rounded">
            PC
          </div>
          <span className="text-white text-xl font-bold">
            PRATYAKSH CHAUDHARY
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Skills", "Experience", "Projects", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(" ", "").toLowerCase()}`}
                  onClick={() => setActiveLink(item)}
                  className="group relative font-medium tracking-wide text-white"
                >
                  <p className="text-white">{item.toUpperCase()}</p>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-500 ${
                      activeLink === item
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            )
          )}
        </ul>

        {/* CTA Button (Hidden on mobile) */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          <p className="text-white">LET’S TALK</p>
        </a>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={toggleMenu} />
          ) : (
            <FaBars onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden bg-[#060d17] text-white px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        {["Home", "Skills", "Experience", "Project", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.replace(" ", "").toLowerCase()}`}
              onClick={() => {
                setActiveLink(item);
                setMenuOpen(false);
              }}
              className="block text-white font-medium py-2"
              style={{ color: "white" }} // ✅ kept your inline css
            >
              {item.toUpperCase()}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
