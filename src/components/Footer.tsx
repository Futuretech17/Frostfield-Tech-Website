import { Link } from "wouter";
import { Globe, Mail, MessageCircle, MapPin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 group mb-4 inline-flex"
              data-testid="footer-logo"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Globe className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-primary tracking-tight">
                Frostfield Tech
              </span>
            </Link>
            <p className="text-slate-600 mb-6 max-w-sm">
              Reliable websites and long-term support for Kenyan businesses.
            </p>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#25D366] hover:text-white transition-colors"
                data-testid="footer-social-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">WhatsApp</span>
              </a>
              <a
                href="mailto:info@frostfield.co.ke"
                className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors"
                data-testid="footer-social-email"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary transition-colors text-sm"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600 mb-4">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <a
                  href="mailto:info@frostfield.co.ke"
                  className="hover:text-primary transition-colors"
                >
                  info@frostfield.co.ke
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-slate-400" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +254 713 772 408
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 font-medium">M-Pesa payments supported</p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2026 Frostfield Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}