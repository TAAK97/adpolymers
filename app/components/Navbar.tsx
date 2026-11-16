'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Cpu, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Materials', href: '/materials' },
    { name: 'Projects', href: '/projects' },
    { name: 'Instant Quote', href: '/tools/instant-quote' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* SVG High-Tech Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)] transition duration-300">
    <svg className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  </div>
  <div className="flex flex-col">
    <span className="text-xl font-black tracking-wider text-white flex items-center gap-1">
      AD <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">POLYMERS</span>
    </span>
    <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">Engineered Synthetics</span>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold px-5 py-2.5 rounded-lg transition shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center gap-1.5"
          >
            Request Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-400 hover:text-white p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium text-lg"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center bg-cyan-500 text-slate-950 font-bold py-3 rounded-lg"
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}