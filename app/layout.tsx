import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adpolymers.in'),
  title: {
    default: 'AD Polymers | Plastic Injection Moulding, Parwanoo (HP)',
    template: '%s | AD Polymers',
  },
  description:
    'High-tolerance engineering plastic moulding for Maruti Suzuki, Aquaguard, and Ozone architectural hardware. Custom plastic injection moulding, insert moulding, and rapid tooling.',
  keywords: [
    'Plastic Injection Moulding India',
    'Custom Moulding Manufacturer',
    'Insert Moulding Services',
    'Tooling and Mould Design India',
    'Polycarbonate Moulding',
    'Precision Plastic Components',
    'Engineering Plastics India',
  ],
  authors: [{ name: 'AD Polymers' }],
  creator: 'AD Polymers',
  publisher: 'AD Polymers',
  openGraph: {
    title: 'AD Polymers | Precision Injection Moulding India',
    description:
      'High-tolerance engineering plastic moulding for automotive, electronics, and consumer hardware leaders.',
    url: 'https://www.adpolymers.in',
    siteName: 'AD Polymers',
    images: ['/og-image.png'],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col antialiased">
        <JsonLd />
        <Navbar />
        <div className="grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}