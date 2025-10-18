export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/vayro-logo.png"
              alt="Vayro Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="font-semibold text-white text-lg">Vayro</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
            The AI-powered travel planner built for explorers, dreamers, and everyday travelers.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/#features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="/#coming-soon" className="hover:text-white transition">
                Coming Soon
              </a>
            </li>
          </ul>
        </div>

        {/* Connect Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Connect</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/company/vayro/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vayroapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Vayro787826"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                X (Twitter)
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Vayroapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-white font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-gray-500">contact@vayro.org</p>
          <p className="mt-1 text-xs text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">Vayro.</span> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

