import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bgParticles w-full text-white py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold">ViriBot</h3>
            <p className="text-gray-400 text-sm mt-2">
              Building the future of Discord bots, one click <br /> at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-lg font-semibold">{section.title}</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/*  <div>
            <h4 className="text-lg font-semibold">Connect</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ViriBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
