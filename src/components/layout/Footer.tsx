import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { contactInfo, navLinks } from '../../data/site';
import { equipment } from '../../data/equipment';

export function Footer() {
  const services = equipment.map((item) => item.name);

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-md bg-white p-1 shadow-sm">
              <img src={logo} alt="Rajdhani Rentals LLP logo" className="h-full w-full object-contain drop-shadow-sm" />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold">Rajdhani Rentals LLP</p>
              <p className="text-sm text-slate-300">Aerial access equipment rental</p>
            </div>
          </div>
          <p className="mt-5 leading-7 text-slate-300">
            Reliable boom lifts, cherry pickers, skylifts and scissor lifts for safe work at height across India.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { label: 'LinkedIn', Icon: Linkedin },
              { label: 'Facebook', Icon: Facebook },
              { label: 'Instagram', Icon: Instagram },
            ].map(({ label, Icon }) => (
              <a key={label} href="#" className="focus-ring rounded-md bg-white/10 p-2 transition hover:bg-brand-yellow hover:text-brand-ink" aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Services</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {services.map((service) => (
              <li key={service}>
                <Link to="/equipment" className="transition hover:text-brand-yellow">
                  {service} Rental
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-slate-300">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition hover:text-brand-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="transition hover:text-brand-yellow">
                Get Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold">Contact</h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 text-brand-yellow" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-5 w-5 text-brand-yellow" />
              <span>{contactInfo.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 text-brand-yellow" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 Rajdhani Rentals LLP. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-yellow">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
