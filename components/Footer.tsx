import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-white text-center text-[#13182B] font-extrabold text-xl p-12">
      PAPEDANOMICS 2024
      <div className="mt-4">
        <Link href="/credit" className="text-sm text-[#13182B]">
          Credit
        </Link>
      </div>
    </div>
  );
}

export default Footer;
