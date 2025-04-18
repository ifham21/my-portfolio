'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import '../globals.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="navbar"
    >
      <ul>
        {links.map(({ href, label }) => (
          <li key={href} className={pathname === href ? 'active' : ''}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
