export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-red-300/20 bg-gradient-to-b from-transparent to-white/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Marin Kitagawa
            </h3>
            <p className="text-red-700 text-sm leading-relaxed">
              A premium fan site dedicated to Marin Kitagawa from "My Dress-Up Darling". 
              Celebrating her passion for cosplay, fashion, and infectious optimism.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-red-600 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Marin", href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Quotes", href: "#quotes" },
                { label: "Character Info", href: "#about" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-red-700 hover:text-red-600 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h4 className="font-bold text-red-600 uppercase tracking-widest text-sm">Community</h4>
            <div className="flex gap-4">
              {[
                { icon: "f", label: "Facebook", href: "#" },
                { icon: "𝕏", label: "Twitter", href: "#" },
                { icon: "📷", label: "Instagram", href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-red-300/50 flex items-center justify-center text-red-600 hover:border-red-400/80 hover:bg-red-200/20 transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-200/40 pt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-red-700">
            <div>
              <p>
                © {currentYear} Marin Kitagawa Fansite. All rights reserved.
              </p>
              <p className="text-xs mt-2">
                Content sourced from fanwiki and Zerochan. Images are official artwork and fan creations.
              </p>
            </div>

            <div className="text-right space-y-1">
              <p className="text-xs">
                <strong>Disclaimer:</strong> This is a fan-made site celebrating the character.
              </p>
              <p className="text-xs">
                "My Dress-Up Darling" © Shinichi Fukuda
              </p>
            </div>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center pt-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-6 py-2 text-sm font-semibold text-red-600 border border-red-300/50 rounded-full hover:border-red-400/80 hover:bg-red-200/20 transition-all duration-300"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
