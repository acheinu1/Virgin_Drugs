import Testimonial from "@components/Testimonial";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaMapMarker } from "react-icons/fa";
import { GrClose } from "react-icons/gr";



//import { Container, Header, Main, Footer, Cards } from "@components";

function Home({ posts }) {
 // console.log("someting nice ", posts[0])
  const [loading, setLoading] = React.useState(false);
  const [showEmailAlert, setShowEmailAlert] = React.useState(false);
  const [email, setEmail] = React.useState("");

  const submitEmail = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://virgindrugs.herokuapp.com/api/emails', {
        "data": {
          "email": email
        }
      });
      setLoading(false);
      setEmail("");
      setShowEmailAlert(true);
    } catch (e) {
      setLoading(false);
    }
    // alert(`So your name is ${email}?`);
  };
  return (
    <>
      <header className="relative" id="hero">
        {/* <div className="absolute h-full w-full flex flex-col md:flex-row pb-8 md:pb-0">
          <figure className="relative h-[40vh] mt-auto md:mt-0 md:h-[80vh] md:w-3/6 overflow-hidden md:ml-auto transform md:translate-y-[-100px]">
            <Image src="/uploads/hero.png" layout="fill" objectFit="contain" />
          </figure>
        </div> */}
        <div className="mx-24 items-center justify-between flex min-h-[75vh] flex-col md:flex-row relative space-x-8">
          <div className="flex flex-col justify-center">
            <div className="flex ml-[160px] items-start  -mt-10" >
              <Image src="/leaf.svg" className="invisible md:visible" alt="quotes" width={90} height={90} />
            </div>
            <h1 className="font-heading leading-tight text-[35px] md:text-[65px] text-green-500 font-bold">
              We Practice <br /> Natural Health
            </h1>
            <p className="font-heading text-xl md:text-3xl font-bold mt-4 text-brown-500">
              Food Against Diseases !
            </p>

            <div className="rounded-md shadow mt-20 w-[200px]">
              <a
                href="/footer"
                className="w-full flex items-start justify-center px-8 py-5 border border-transparent text-base font-medium  text-white-500 bg-green-500 md:py-3 md:text-lg md:px-5"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="hidden md:flex  justify-center ">
            <Image src="/hero_image.svg" height={550} width={550} />
          </div>
        </div>
      </header>
      {/* =============================WHO WE ARE SECTIONS =============================*/}
      <section className="bg-brown-500">
        <div className=" flex justify-between text-center flex-col md:flex-row ">
          {/* =======================left side */}
          <div className="bg-brown-600 w-[100%] md:w-[100%] lg:w-[50%]">
            <div className="p-[20%] md:p-[15%]">
              <h1 className="font-heading text-[35px] font-bold text-white-500 m+2  md:text-[50px]">We are</h1>
              <p className="font-heading text-[14px] mx-10 text-white-400 md:text-[23px]"> a global nutritional support service company with patent rights over, <span className="text-green-400 font-bold">Fudelt Method</span></p>
            </div>
          </div>
          {/* =======================right side */}
          <div className="bg-brown-400 w-[100%]   md:w-[100%] lg:w-[50%]">
            <div className="p-[20%] md:p-[13%]">
              <h1 className="font-heading text-[35px] font-bold text-white-500 m+2  md:text-[50px]">We provide</h1>
              <p className="font-heading text-[14px] mx-10 text-white-400 md:text-[23px]">for the healthy and the sick, <span className="text-green-400 font-bold">nutritional services</span> that are affordable,  accessible and simple to use.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===========================FUDELT METHOD==================================== */}
      <section className="bg-brown-500">
        <div className="flex flex-col md:flex-row">
          {/* =======================left===== */}
          <div className=" h-[40vh] md:h-[80vh] flex items-center w-[100%] md:w-[100%] lg:w-[50%] justify-center ">
            <div className="bg-green-500 w-[75%] h-[70%] md:h-[55%] md:w-[70%] ">
              <div className="bg-white-400 h-[93%] w-[95%]"></div>
            </div>
          </div>
          {/* =======================right==== */}
          <div className="h-[40vh] md:h-[80vh] flex items-center w-[100%] md:w-[100%] lg:w-[50%] justify-center ">
            <div className="ml-10 md:ml-0">
              <div className="flex items-center flex-row ">
                <Image src="/Fudelt_method.svg" height="40px" width="40px" />
                <h1 className="font-heading text-[24px] md:text-[30px] font-bold ml-4 text-white-500">Fudelt Method</h1>
              </div>
              <p className="font-sans text-[12px] mt-4 mr-10 md:mt-6 md:mr-32 text-white-400 width-[20%">is the method of using the right proportions of food nutrients to establish excellent health. </p>
              <div>
                <div className="bg-brown-400 h-[55px] mt-8 w-[85%]">
                  <p className="font-heading text-[27px] ml-4 md:text-[35px] font-bold md:ml-14 bg-gradient-to-tr from-green-500 to-green-400 bg-clip-text text-transparent">100% <span className="text-white-500 text-[16px] md:text-[20px] ml-12 md:ml-20">effective</span></p>
                </div>
                <div className="bg-brown-400 h-[55px] mt-8 w-[85%]">
                  <p className="font-heading text-[27px] ml-4 md:text-[35px] font-bold md:ml-14 bg-gradient-to-tr from-blue-400 to-blue-500 bg-clip-text text-transparent">100% <span className="text-white-500 text-[16px] md:text-[20px] ml-12 md:ml-20">Food Nutrients</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================================testimonial Section */}
      {/* <section className="bg-brown-500">
      
      </section> */}
      <Testimonial posts={posts} />

      {/* ===================================================Blog Section===== */}
      <section className="bg-brown-500 overflow-hidden" >
        <div>
          {/* ============================Up section===== */}
          <div>
            <h1 className="font-heading p-6 md:p-12 text-[30px] md:text-[50px] font-bold px-[20%] text-white-500 text-center">Latest News</h1>
          </div>
          {/* ============================Down section===== */}
          <div className="flex flex-wrap md:mx-20 items-center justify-center">
            {posts?.map((post) => {
              return <div className="p-4 sm:w-1/4 lg:w-1/4" key={post.id}>
                <div className="w-[250px] h-[350px] bg-brown-400 mb-14 ">
                  <div className="p-4"> <Image src={post?.attributes?.BlogThumbnail?.data?.attributes?.url ?? ''} height="220px" width="290px" /> </div>
                  <div className="px-4 w-[250px]">
                    <h1 className="font-heading text-[16px] font-bold text-white-500 hover:text-white-600 active:bg-violet-700 mb-4"> <a href="#" >{post.attributes.Title}</a></h1>
                    <p className="text-green-400 text-[12px]">{post.attributes.Author}</p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
      {/* ========================================Fudelt Updates section=========================== */}
      <section>
        <div className="flex item-center h-[auto] bg-brown-400">
          <div className="flex bg-brown-500  w-[85%] mx-auto items-center justify-center my-[5%] flex-col">
            <h1 className="font-heading text-bold text-white-500 text-[30px] md:text-[50px] font-bold px-[10%] md:px-[20%] text-center p-6">Guidelines For Good Health</h1>
            <div className="h-[40vh] bg-black"> </div>
          </div>
        </div>
      </section>
      {/* ========================================Subscription form============================== */}
      <section className="h-[55vh]  md:h-[110vh] bg-brown-500" >

        <div className=" md:relative overflow-x-hidden flex justify-center ">
          <div className="md:absolute flex md:flex-col w-full top-16 flex-row justify-center mx-auto">
            <h1 className="font-heading md:p-12 text-[30px] md:-m-9 md:text-[50px] mt-14 font-bold px-[20%] text-white-500 text-center mx-auto">Get Updated</h1>
          </div>
          {/* =================================inner box====================================== */}
          <div className=" bg:transparent absolute md:bg-brown-500 w-[100%] md:w-[85%] p-6 md:p-14 my-4 md:my-48 justify-center h-[30vh] md:h-[50vh] item-center z-40">
            <div className=" bg:transparent md:bg-brown-400 w-[100%] md:w-[100%] md:h-[35vh] h-[50vh]">
              {/* ===================================================================== */}
              <form className=" flex justify-center items-center h-[100%]" onSubmit={submitEmail}>
               <div className="flex flex-col mt-2">
                <div className="flex md:-mx-3 mb-6 outline-none flex-col md:flex-row mx-0">
                  <input className="w-[80vw] md:w-[55vw] indent-14 bg-transparent text-white-400 border text-[15px] border-white-500 py-6 leading-tight focus:outline-none focus:bg-white  mb-4 md:mb-0" id="email" name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="PLEASE ENTER YOUR EMAIL ADDRESS" required />
                  <button className="flex-shrink-0  outline-none align-center justify-center focus:ring border-transparent  bg-green-500  text-sm border-4 text-white md:py-1 md:px-8 py-4 md:ml-3 text-white-500" type="submit">
            
                {loading&& "Loading..."}
                {!loading&& "SUBSCRIBE"}
                
                </button>
               
                </div>
              {showEmailAlert &&(  <div className="mt-4 flex items-center justify-between bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700" role="alert">
Email subscription successful!

<button type="button" onClick={()=>setShowEmailAlert(false)}><GrClose className=""/> </button>
</div>)}
                </div>
                
              </form>
              

              {/* <div className="mt-3"><p>Get inspired by these stories</p></div> */}
            </div>
          </div>
          <div className="transparent mt-5 md:mt-72 absolute md:relative z-20">
            <Image src="/leafbg.svg" className="invisible md:visible" alt="quotes" width={5262.7} height={1662.16} />
          </div>
        </div>

      </section>
      {/* ========================================Footer section=========================== */}
      <section className="bg-brown-500 text-center">
        <div >
          {/* ========================== top section============================ */}
          <div className="flex justify-between md:mx-[8%] flex-col  md:flex-row items-center mx-[14%]" >
            <div className="">
              {/* <h1>Logo Here</h1> */}
              <Image src="/white_logo.svg" width="200px" height="86px" />
            </div>
            <div className="font-heading text-[14px] md:text-[18px] md:py-5 md:w-[45%] w-[90%] py-5 text-white-500">
              <p className="md:text-right">Our Mission is to provide to the world affordable, accessible
                and simple nutrient based cures for all diseases
              </p>
            </div>
          </div>
          {/* ========================== bottom section============================ */}
          <div className="flex justify-between mx-[8%] py-[5%] flex-col md:flex-row items-center " >
            <div className="flex w-[90%] flex-col md:flex-row text-[14px] items-center text-white-500 md:w-[35%]">
              <p className="flex text-green-400  text-[25px] px-4"><FaMapMarker /></p>
              <p className="text-white-400 opacity-60 font-heading  md:text-left  mb-12 md:mb-0">Suite B3, Fortress Plaza, Sharp Corner U-turn, Mararaba, Nasarawa State, Nigeria</p>
            </div>
            <div className="flex font-heading text-[18px] mr-2 text-white-500 flex-col md:flex-row items-center mb-12 md:mb-0">
              <p className="flex text-black  text-[30px]">
                <a href="https://www.nairaland.com/" target="_blank"><FaWhatsapp className="bg-green-400 mx-2 rounded-md p-1" /> </a>
                <a href="https://www.nairaland.com/" target="_blank"><FaInstagram className="bg-green-400 mx-2 rounded-md p-1" /> </a>
                <a href="https://www.nairaland.com/" target="_blank"><FaFacebook className="bg-green-400 mx-2 rounded-md p-1" /> </a>
              </p>
              <p className="text-white-400 opacity-60">
                @virgindrugs_ltd
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;

export async function getStaticProps() {

  const postsRes = await axios.get("https://virgindrugs.herokuapp.com/api/blogposts?populate=*");
  console.log('from server ', postsRes);
  return {
    props: {
      posts: postsRes.data.data
    },
  }
};
