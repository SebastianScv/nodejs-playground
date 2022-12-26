import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="flex space-x-4 rounded">
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a>Contact</a>
      </Link>
    </nav>
  );
};

export default Navigation;
