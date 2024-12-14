import React from 'react'
import { Worm, Menu } from "lucide-react"
import Link from 'next/link';
const Header = () => {


    const fullHeader = () => {
      
        return (
          <>
            <li>
              <Link href="/me">Myself</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/travel">Travel</Link>
            </li>
            <li>
              <Link href="/photography">Photography</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </>
        );
    };
  return (
    <div className="navbar justify-between bg-base-200">
      <Link href="/" className="btn btn-ghost btn-sm text-xl">
        <Worm />
        <p>
          <span className="text-accent">Robert Foley</span>
        </p>
      </Link>
      <div className="dropdown dropdown-end sm:hidden">
        <button className="btn btn-ghost">
          <Menu />
        </button>

        <ul
          tabIndex="0"
          className="dropdown-content menu z-[1] bg-base-300 p-6 rounded-box shadow w-56 gap-2"
        >
          {fullHeader()}
        </ul>
      </div>
      <ul className="hidden menu sm:menu-horizontal gap-2">{fullHeader()}</ul>
    </div>
  );
}

export default Header