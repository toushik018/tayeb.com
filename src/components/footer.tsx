import { SOCIALS } from "@/data/socials";
import { siteMetadata } from "@/data/siteMetadata";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-6">
      <div className="flex space-x-4 mb-4">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <social.icon className="h-6 w-6" />
          </a>
        ))}
      </div>
      <p className="text-gray-600 text-sm text-center">
        © {new Date().getFullYear()}&nbsp;
        <a
          href={siteMetadata.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          Tayeb Hossain
        </a>
        &nbsp; All rights reserved.
      </p>
      <nav className="flex space-x-4 mt-4">
        <a
          href="/about"
          className="text-gray-600 hover:text-gray-900 transition text-sm"
        >
          About
        </a>
        <a
          href="/contact"
          className="text-gray-600 hover:text-gray-900 transition text-sm"
        >
          Contact
        </a>
        <a
          href="/privacy-policy"
          className="text-gray-600 hover:text-gray-900 transition text-sm"
        >
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
}
