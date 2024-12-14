import React from 'react'
import Link from 'next/link';
import { Linkedin, Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-14 bg-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <Link href="/me" className="text-gray-500 hover:text-gray-900">
                Myself
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className=" text-gray-500 hover:text-gray-900"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/travel"
                className=" text-gray-500 hover:text-gray-900"
              >
                Travel
              </Link>
            </li>
            <li>
              <Link
                href="/photography"
                className=" text-gray-500 hover:text-gray-900"
              >
                Photography
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex space-x-10 justify-center items-center mb-14">
            <Link
              href="https://www.linkedin.com/in/robertfoleyiii/"
              target="_blank"
              className="block  text-gray-600 transition-all duration-500 hover:text-indigo-600 "
            >
              <Linkedin />
            </Link>
            <Link
              href="https://github.com/apmanager001"
              target="_blank"
              className="block  text-gray-600 transition-all duration-500 hover:text-indigo-600 "
            >
              <Github />
            </Link>
            <Link
              href="https://robertfoley.substack.com/"
              target="_blank"
              className="block"
            >
              <img className="h-8" src="/substack.png" />
            </Link>
            <Link
              href="https://www.instagram.com/foleyautamatic/"
              target="_blank"
              className="block  text-gray-600 transition-all duration-500 hover:text-indigo-600 "
            >
              <Instagram />
            </Link>
            <Link
              href="https://x.com/RobertFoley_"
              target="_blank"
              className="block  text-gray-600 transition-all duration-500 hover:text-indigo-600 "
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer