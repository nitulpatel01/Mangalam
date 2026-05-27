import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { units, socialMedia } from "../data/contactData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-industrial-900 border-t border-slate-800 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precision Patterns & Manufacturing
            </h3>

            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Your trusted partner for high-precision manufacturing, prototype
              development, and heavy fabrication. Quality delivered with
              accuracy.
            </p>

            <div className="flex gap-3">
              {socialMedia.map(({ Icon, Link }, i) => (
                <a
                  key={i}
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 hover:bg-cyan-600 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-2 text-sm">
              {[
                "home",
                "about",
                "journey",
                "infrastructure",
                "services",
                "gallery",
                "clients",
                "contact",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link}`}
                    className="text-slate-400 hover:text-cyan-400 transition"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Info</h4>

            <div className="space-y-5">
              {units.map((unit, idx) => (
                <div
                  key={idx}
                  className="space-y-2"
                >
                  {unit.companies.map((company, i) => (
                    <h5
                      key={company || i}
                      className="text-cyan-400 text-sm font-semibold"
                    >
                      {company}
                    </h5>
                  ))}

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                    <p className="text-slate-400 text-sm leading-snug">
                      {unit.address}
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                    <div className="text-sm">
                      {unit.phone.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${p}`}
                          className="block text-slate-400 hover:text-cyan-400"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Mail className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                    <div className="text-sm">
                      {unit.email.map((e, i) => (
                        <a
                          key={i}
                          href={`mailto:${e}`}
                          className="block text-slate-400 hover:text-cyan-400"
                        >
                          {e}
                        </a>
                      ))}
                    </div>
                  </div>

                  {idx !== units.length - 1 && (
                    <div className="border-b border-slate-800 pt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-slate-500 text-center md:text-left">
            © {currentYear} Shambhavi Technovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
