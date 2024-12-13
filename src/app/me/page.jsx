import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import {
  Linkedin,
  Github,
  Instagram,
  Twitter,
  MapPin,
  Briefcase,
} from "lucide-react";

const Me = () => {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-bottom bg-[url('/7.jpg')]">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto h-48 w-48 bg-cover bg-center bg-[url('/photome3.jpg')]"></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Robert Foley</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <Briefcase color="green" />
              <span className="pl-2">Full Stack, Web Dev</span>
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <MapPin color="green" />{" "}
              <span className="pl-2">Michigan, USA</span>
            </p>
            <p className="pt-8 text-sm">
              What to say? I am a reserved person that enjoys learning. You will
              see interests that keep me going and enjoy in downtime. When it
              comes down to it I like to build stuff and enjoy the beauty in
              what we should be enjoying in our every day life.
              <br></br> <br></br>
              <span className="italic text-xs">
                Never let your memories be greater than your dreams. <br></br>
                -Douglas Ivester
              </span>
            </p>

            <div className="pt-12 pb-8">
              <Link href="/contact">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </Link>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <Link
                href="https://www.linkedin.com/in/robertfoleyiii/"
                className="block  text-gray-600 transition-all duration-500 hover:text-green-700 "
              >
                <Linkedin />
              </Link>
              <Link
                href="https://github.com/apmanager001"
                className="block  text-gray-600 transition-all duration-500 hover:text-green-700 "
              >
                <Github />
              </Link>
              <Link
                href="https://www.instagram.com/foleyautamatic/"
                className="block  text-gray-600 transition-all duration-500 hover:text-green-700 "
              >
                <Instagram />
              </Link>
              <Link
                href="https://x.com/RobertFoley_"
                className="block  text-gray-600 transition-all duration-500 hover:text-green-700 "
              >
                <Twitter />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src="/profile.jpg"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block h-[575px] object-cover object-[70%_center]"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Me