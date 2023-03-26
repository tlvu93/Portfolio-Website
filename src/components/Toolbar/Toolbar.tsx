import React from 'react'

const navItems = [
  { name: 'About' },
  { name: 'Projects' },
  { name: 'Experience' },
  { name: 'Contact' }
]

const Toolbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary-500">
      <div className="mx-5 flex h-16 items-center text-onPrimary-500">Logo</div>
      <div className="flex font-['Courier_Prime']">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex h-16 items-center p-4 text-onPrimary-500  hover:bg-primary-400"
          >
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Toolbar

{
  /* <nav className="flex flex-wrap items-center justify-between bg-primary-500">
<div className="mr-6 flex shrink-0 items-center text-white">
  <svg
    className="mr-2 h-8 w-8 fill-current"
    width="54"
    height="54"
    viewBox="0 0 54 54"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
  </svg>
  <span className="text-xl font-semibold tracking-tight">
    Tailwind CSS
  </span>
</div>
<div className="block lg:hidden">
  <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
    <svg
      className="h-3 w-3 fill-current"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  </button>
</div>
<div className="block w-full grow lg:flex lg:w-auto lg:items-center">
  <div className="text-sm lg:grow">
    <a
      href="#responsive-header"
      className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
    >
      Docs
    </a>
    <a
      href="#responsive-header"
      className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
    >
      Examples
    </a>
    <a
      href="#responsive-header"
      className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
    >
      Blog
    </a>
  </div>
  <div>
    <a
      href="#"
      className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
    >
      Download
    </a>
  </div>
</div>
</nav> */
}
