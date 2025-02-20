import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Quinx
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#features"
                className="hover:text-sky-400 transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                className="hover:text-sky-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-sky-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-sky-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
