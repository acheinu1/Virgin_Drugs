import Image from "next/image";
import Link from "next/link";
const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <div className="flex px-12">
          <div className="">
            {/* <h1>Logo Here</h1> */}
            <Image src="/logo.svg" width="200px" height="86px" />
          </div>
          <div className="ml-auto">
            <div className="py-8 flex flex-row overflow-x-auto space-x-8 ">
              <Link href="/#overview" passHref>
                <a className={`text-brown  transition-all ease-linear`}>HOME</a>
              </Link>
              <Link href="/#overview" passHref>
                <a className={`text-brown  transition-all ease-linear`}>
                  ABOUT US
                </a>
              </Link>
              <Link href="/#overview" passHref>
                <a className={`text-brown  transition-all ease-linear`}>
                  TESTIMONIALS
                </a>
              </Link>
              <Link href="/#overview" passHref>
                <a className={`text-brown  transition-all ease-linear`}>
                  OUR PRODUCTS
                </a>
              </Link>
              <Link href="/#overview" passHref>
                <a className={`text-brown  transition-all ease-linear`}>BLOG</a>
              </Link>
            </div>
          </div>
          <div className="bg-brown-500 text-white flex px-4 ml-4">
            <button>CONTACT US</button>
          </div>
        </div>
      </nav>
      {children}
      <h1>footer</h1>
    </>
  );
};

export default Layout;
