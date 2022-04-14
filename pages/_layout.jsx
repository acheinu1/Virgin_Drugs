import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
const Layout = ({ children }) => {

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  // =================button toggle =================
  <button
    className=' inline-flex hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
    onClick={handleClick}
  >
    <svg
      className='w-6 h-6'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
</button>

  return (
    <>
      <nav className="flex items-center flex-wrap px-10 md:px-20 py-4 bg-green-500 md:bg-transparent ">
        <Link href="/">
          <a className="inline-flex items-center  mr-4 ">
          <div className=" md:w-[200px] md:h-[46px]">
            {/* <h1>Logo Here</h1> */}
            <Image src="/logo.svg" width="170px" height="46px" />
          </div>
          </a>
        </Link>
        <button
          className=" inline-flex   rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto justify-items-end md:px-0 px-6  md:py-0 py-4 ">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white ">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:text-white">
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-5 py-4 text-white font-bold items-center justify-center bg-brown-500 hover:bg-brown-400 text-white-500">
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {/* =================================================Navbar ends============================ */}
      
      {children}
      <h1><p className="text-center p-[1%]">Copyright &copy; <span className="font-bold">2022</span></p></h1>
    </>
  );
};

export default Layout;


