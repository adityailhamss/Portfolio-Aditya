import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo/logo.png';
import adit from '../assets/logo/adit.png'
import { IoMdDownload } from "react-icons/io";

const navigation = [
  { name: 'About', href: '#home'},
  { name: 'Experience', href: '#experience'},
  { name: 'Portfolio', href: '#portfolio'},
  { name: 'Contact', href: '#contact'},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');

}

// Function to handle download PDF
function handleDownloadPDF() {
  window.open('https://drive.google.com/file/d/1Cqw-L_mxwn0swO0YfU2X20uyAZhvpgb2/view?usp=sharing', '_blank');
}

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [activeLink, setActiveLink] = useState('/');

  const handleSetActiveLink = (href) => {
    setActiveLink(href);
  };

  return (
    <Disclosure as="nav" className={`sticky top-0 w-full p-2 z-50 ${scrollPosition > 0 ? 'bg-gray-900 bg-opacity-75 backdrop-blur-md' : 'bg-gray-900'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#28CB8B] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img className="h-20 w-auto" src={adit} alt="Your Company" />
                  </a>
                </div>
                <div className="hidden sm:block pt-2">
                  <div className="flex justify-center space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          'rounded-md px-3 py-2 text-base font-semibold',
                          item.href === activeLink ? 'text-[#28CB8B]' : 'text-white'
                        )}
                        onClick={() => handleSetActiveLink(item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <button
                    onClick={handleDownloadPDF}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
                  >
                    <span className="flex flex-row items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      <IoMdDownload />
                      Resume
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    'block rounded-md px-3 py-2 text-base font-medium',
                    item.href === activeLink ? 'text-[#28CB8B]' : 'text-white'
                  )}
                  onClick={() => handleSetActiveLink(item.href)}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <button
                onClick={handleDownloadPDF}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#28CB8B] hover:text-white"
              >
                Resume
              </button>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
