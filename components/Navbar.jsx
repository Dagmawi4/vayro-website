"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();

  // Scroll-based background and section tracking (only for homepage)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);

    if (pathname === "/") {
      const sections = document.querySelectorAll("section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { threshold: 0.5 }
      );
      sections.forEach((sec) => observer.observe(sec));
      return () => {
        window.removeEventListener("scroll", onScroll);
        sections.forEach((sec) => observer.unobserve(sec));
      };
    } else {
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, [pathname]);

  // Link component with active style
  const NavLink = ({ href, label }) => {
    const isPageLink = !href.startsWith("#");
    const isActive =
      (isPageLink && pathname === href) ||
      (!isPageLink && pathname === "/" && active === href.replace("#", ""));

    const linkClass = `relative px-3 py-2 text-sm font-medium transition ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

    const underlineClass = `absolute left-0 -bottom-0.5 h-[2px] w-full rounded-full transition-all ${
      isActive ? "bg-blue-600" : "bg-transparent group-hover:bg-blue-200"
    }`;

    return isPageLink ? (
      <Link href={href} onClick={() => setOpen(false)} className={linkClass}>
        {label}
        <span className={underlineClass} />
      </Link>
    ) : (
      <a href={href} onClick={() => setOpen(false)} className={linkClass}>
        {label}
        <span className={underlineClass} />
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
        <Link href="/" className="flex items-center">
          <img
            src="/vayro-logo.png"
            alt="Vayro Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-1 group">
          <NavLink href="/" label="Home" />
          <NavLink href="/#features" label="Features" />
          <NavLink href="/#demo" label="Demo" />
          <NavLink href="/#faq" label="FAQ" />
          <NavLink href="/#feedback" label="Feedback" />
          <NavLink href="/#coming-soon" label="Coming Soon" />
          <NavLink href="/about" label="About" />
        </div>

        {/* CTA button */}
        <Link
          href="/#waitlist"
          className="hidden md:inline-flex rounded-lg bg-blue-600 text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 shadow-sm"
        >
          Get Early Access
        </Link>

        {/* Mobile menu toggle */}
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

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
          <div className="px-4 py-3 flex flex-col space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/#features", label: "Features" },
              { href: "/#demo", label: "Demo" },
              { href: "/#faq", label: "FAQ" },
              { href: "/#feedback", label: "Feedback" },
              { href: "/#coming-soon", label: "Coming Soon" },
              { href: "/about", label: "About" },
            ].map((link, i) => {
              const isPageLink = !link.href.startsWith("#");
              const isActive =
                (isPageLink && pathname === link.href) ||
                (!isPageLink &&
                  pathname === "/" &&
                  active === link.href.replace("#", ""));
              return (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#waitlist"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-blue-600 text-white px-4 py-3 text-center font-semibold hover:bg-blue-700 shadow"
            >
              Get Early Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

