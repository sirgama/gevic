import React, { useState, useEffect } from 'react'
import Logo from '../../../assets/images/logo.svg'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center md:gap-10">
      <Typography
        as="li"
        variant="small"
        color="gray-400"
        className="p-1 font-normal"
      >
        <a href="#home" className="flex items-center font-bold text-gray-300 text-sm">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center font-bold text-gray-300 text-sm">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#service" className="flex items-center font-semibold text-gray-300 text-sm">
          Service
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#office" className="flex items-center font-bold text-gray-300 text-sm">
          Office
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-2 lg:px-2 lg:py-4 bg-transparent border-none ">
    <div className="container-fluid mx-auto flex items-center justify-between text-white">
      <Typography
        as="a"
        href="#"
        variant="small"
        className="mr-4 cursor-pointer py-1.5 font-normal"
      >
        <img src={Logo}  />
      </Typography>
      <div className="hidden lg:block">{navList}</div>
      <Button  size="sm" className="hidden lg:inline-block rounded-full sm:px-6 sm:py-3 !bg-orange-900">
        <span className='normal-case text-sm text-gray-200'>Get in touch</span>
      </Button>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <MobileNav open={openNav}>
      {navList}
      <Button  size="sm" fullWidth className=" rounded-full sm:px-6 sm:py-3 !bg-orange-900">
        <span className='normal-case text-sm text-gray-200'>Get in touch</span>
      </Button>
    </MobileNav>
  </Navbar>

  )
}
