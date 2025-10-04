"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    // Track active section
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  const NavLink = ({ href, children }) => {
    const isActive = active === href.replace("#", "");
    return (
      <a
        href={href}
        onClick={() => setOpen(false)}
        className={`relative px-3 py-2 text-sm font-medium transition ${
          isActive
            ? "text-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {children}
        {/* underline animation */}
        <span
          className={`absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full transition-all ${
            isActive ? "bg-blue-600" : "bg-transparent group-hover:bg-blue-200"
          }`}
        />
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        solid ? "bg-white/90 backdrop-blur border-b border-gray-100" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/vayro-logo.png"
            alt="Vayro Logo"
            className="h-14 w-auto object-contain" // ✅ larger so text inside logo is clear
          />
        </a>


        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 group">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#demo">Demo</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#coming-soon">Coming&nbsp;Soon</NavLink>
          <NavLink href="#about">About</NavLink>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="hidden md:inline-flex rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 shadow-sm"
        >
          Get Early Access
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-[2px] bg-gray-800 mb-1" />
          <div className="w-5 h-[2px] bg-gray-800 mb-1" />
          <div className="w-5 h-[2px] bg-gray-800" />
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-3 flex flex-col space-y-2">
            {[
              { href: "#home", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#demo", label: "Demo" },
              { href: "#faq", label: "FAQ" },
              { href: "#coming-soon", label: "Coming Soon" },
              { href: "#about", label: "About" },
            ].map((link, i) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={i}
                  onClick={() => setOpen(false)}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              onClick={() => setOpen(false)}
              href="#waitlist"
              className="mt-2 rounded-lg bg-blue-600 text-white px-4 py-3 text-center font-semibold hover:bg-blue-700 shadow"
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
