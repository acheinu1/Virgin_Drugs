import Image from "next/image";
import React from "react";

//import { Container, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
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
              <Image src="/leaf.svg" height="90px" width="90px" />
            </div>
            <h1 className="font-heading leading-tight text-[35px] md:text-[65px] text-green-500 font-bold">
              We Practice <br /> Natural Health
            </h1>
            <p className="font-heading text-xl md:text-3xl font-bold mt-4">
              Food Against Diseases !
            </p>

            <div className="rounded-md shadow mt-24 w-[260px]">
              <a
                href="#"
                className="w-full flex items-start justify-center px-8 py-3 border border-transparent text-base font-medium  text-white bg-green-500 md:py-4 md:text-lg md:px-10"
              >
                CHAT WITH US 
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
        <div className=" flex justify-between text-center">
          {/* =======================left side */}
            <div className="bg-brown-600 w-[50%]">
              <div className="p-[15%]">
                <h1 className="font-heading text-[50px] font-bold text-white-500 m+2">We are</h1>
                <p className="font-heading text-[23px] mx-10 text-white-400"> a global nutritional support service company with patent rights over, <span className="text-green-400 font-bold">Fudelt Method</span></p>
              </div>
            </div>
          {/* =======================right side */}
            <div className="bg-brown-400 w-[50%]">
              <div className="p-[13%]">
                <h1 className="font-heading text-[50px] font-bold text-white-500 m-2">We provide</h1>
                <p className="font-heading text-[23px] mx-10 text-white-400">for the healthy and the sick, <span className="text-green-400 font-bold">nutritional services</span> that are affordable,  accessible and simple to use.</p>
              </div>
            </div>
        </div>
      </section>
      {/* ===========================FUDELT METHOD==================================== */}
      <section className="bg-brown-500">
        <div className="flex">
            {/* =======================left===== */}
            <div className="h-[80vh] w-[50%] flex items-center justify-center ">
                <div className="bg-green-500 h-[55%] w-[70%]">
                  <div className="bg-white-400 h-[93%] w-[95%]"></div>
                </div>
            </div>
            {/* =======================right==== */}
            <div className="h-[80vh] w-[50%] flex items-center">
                <div>
                <div className="flex items-center flex-row ">
                    <Image src="/Fudelt_method.svg" height="40px" width="40px" /> 
                    <h1 className="font-heading text-[30px] font-bold ml-4 text-white-500">Fudelt Method</h1> 
                </div>
                <p className="font-sans text-[12px] mt-6 mr-32 text-white-400 width-[20%">is the method of using the right proportions of food nutrients to establish excellent health. </p>
                <div>
                   <div className="bg-brown-400 h-[55px] mt-8 w-[85%]">
                        <p className="font-heading text-[35px] font-bold ml-14 bg-gradient-to-tr from-green-500 to-green-400 bg-clip-text text-transparent">100% <span className="text-white-500 text-[20px] ml-20">effective</span></p>
                   </div>
                   <div className="bg-brown-400 h-[55px] mt-6 w-[85%]">
                        <p className="font-heading text-[35px] font-bold ml-14 bg-gradient-to-tr from-blue-400 to-blue-500 bg-clip-text text-transparent">100% <span className="text-white-500 text-[20px] ml-20">Food Nutrients</span></p>
                   </div>
                </div>
                </div>
            </div>
        </div>
      </section>
       {/* =======================================testimonial Section */}
      <section className="bg-brown-500">
        {/* ======================text section====== */}
          <div>
              <div><h1 className="font-heading text-[50px] font-bold px-[20%] text-white-500 text-center">Dont take our word for it, trust the <span className="text-green-500">results</span> we always get</h1></div>
                <div className="flex">
                  {/* ============left card======== */}
                  <div className="bg-brown-500 mt-6 w-[50%] flex items-center justify-center">
                       <div className=" bg-brown-400 w-[70%] p-14 my-12">
                          <div className="flex">
                            <Image src="/testimonial.png" height="40px" width="40px" /> 
                            <h1 className="font-heading  text-white-500 text-[20px] ml-8 font-bold">JOHN DOE</h1>
                          </div>
                          <h3 className="font-heading text-[16px] text-green-400 text pr-16 my-4 font-black">
                          Two Year History of Persistent Pains in the Lungs and Difficulty Breathing
                          </h3>
                          <p className=" font-sans text-white-400 text-[12px] leading-[22px]">In 2015, I proposed that ALL diseases could be cured using the right proportions of 
                            food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). 
                            The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                          </p>
                          <div className="rounded-md shadow mt-4 w-[160px]">
                            <a href="#" className=" flex items-start justify-center px-4 py-3 border border-transparent text-base text-white-500 bg-green-500 md:py-4 md:text-[15px] md:px-1 font-bold">
                              READ MORE 
                            </a>
                          </div>
                       </div>
                  </div>
                  {/* ============right card======= */}
                  <div className="bg-brown-500 mt-6 w-[50%] flex items-center justify-center">
                       <div className=" bg-brown-400 w-[70%] p-14 my-8">
                          <div className="flex">
                            <Image src="/testimonial.png" height="40px" width="40px" /> 
                            <h1 className="font-heading  text-white-500 text-[20px] ml-8 font-bold">JOHN DOE</h1>
                          </div>
                          <h3 className="font-heading text-[16px] text-green-400 text pr-16 my-4 font-black">
                          Two Year History of Persistent Pains in the Lungs and Difficulty Breathing
                          </h3>
                          <p className=" font-sans text-white-400 text-[12px] leading-[22px]">In 2015, I proposed that ALL diseases could be cured using the right proportions of 
                            food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). 
                            The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                          </p>
                          <div className="rounded-md shadow mt-4 w-[160px]">
                            <a href="#" className=" flex items-start justify-center px-4 py-3 border border-transparent text-base text-white-500 bg-green-500 md:py-4 md:text-[15px] md:px-1 font-bold">
                              READ MORE 
                            </a>
                          </div>
                       </div>
                  </div>
                </div>
          </div>
      </section>
      {/* ===================================================Blog Section===== */}
      <section className="bg-brown-500 overflow-hidden" >
        <div>
            {/* ============================Up section===== */}
            <div>
                <h1 className="font-heading p-12 text-[50px] font-bold px-[20%] text-white-500 text-center">Latest News</h1>
            </div>
            {/* ============================Down section===== */}
            <div className="flex flex-wrap mx-20 items-center">
              <div className="p-4 sm:w-1/4 lg:w-1/4">
                  <div className="w-[250px] h-[350px] bg-brown-400 mb-14 ">
                    <div className="p-4"> <Image src="https://i.postimg.cc/VNTTqXNp/Blog-1.png" height="220px" width="290px"/> </div>
                    <div className="px-4 w-[250px]"> 
                      <h1 className="font-heading text-[16px] font-bold text-white-500 hover:text-white-600 active:bg-violet-700 mb-4"> <a href="#" >How Food Nutrients Could Be Used to Cure Incurable Diseases</a></h1>
                      <p className="text-green-400 text-[12px]"> By: Pharm Chris Orazulike</p>
                    </div>
                  </div>      
              </div> 
            {/* ========================== */}
            <div className="p-4 sm:w-1/4 lg:w-1/4">
                  <div className="w-[250px] h-[350px] bg-brown-400 mb-14 ">
                    <div className="p-4"> <Image src="https://i.postimg.cc/SsMPDj2s/Blog-2.png" height="220px" width="290px"/> </div>
                    <div className="px-4 w-[250px]"> 
                      <h1 className="font-heading text-[16px] font-bold text-white-500 hover:text-white-600 active:bg-violet-700 mb-4"> <a href="#" >How Food Nutrients Could Be Used to Cure Incurable Diseases</a></h1>
                      <p className="text-green-400 text-[12px]"> By: Pharm Chris Orazulike</p>
                    </div>
                  </div>      
              </div> 
              {/* ========================== */}
            <div className="p-4 sm:w-1/4 lg:w-1/4">
                  <div className="w-[250px] h-[350px] bg-brown-400 mb-14 ">
                    <div className="p-4"> <Image src="https://i.postimg.cc/NjdZ03vg/Blog-3.png" height="220px" width="290px"/> </div>
                    <div className="px-4 w-[250px]"> 
                      <h1 className="font-heading text-[16px] font-bold text-white-500 hover:text-white-600 active:bg-violet-700 mb-4"> <a href="#" >How Food Nutrients Could Be Used to Cure Incurable Diseases</a></h1>
                      <p className="text-green-400 text-[12px]"> By: Pharm Chris Orazulike</p>
                    </div>
                  </div>      
              </div> 
              {/* ========================== */}
            <div className="p-4 sm:w-1/4 lg:w-1/4">
                  <div className="w-[250px] h-[350px] bg-brown-400 mb-14 ">
                    <div className="p-4"> <Image src="https://i.postimg.cc/R0qyJgvw/Blog-4.png" height="220px" width="290px"/> </div>
                    <div className="px-4 w-[250px]"> 
                      <h1 className="font-heading text-[16px] font-bold text-white-500 hover:text-white-600 active:bg-violet-700 mb-4"> <a href="#" >How Food Nutrients Could Be Used to Cure Incurable Diseases</a></h1>
                      <p className="text-green-400 text-[12px]"> By: Pharm Chris Orazulike</p>
                    </div>
                  </div>      
              </div> 
            </div>
        </div>
      </section>
      {/* ========================================Fudelt Updates section=========================== */}
      <section>
        <div className="flex item-center h-[auto] bg-brown-400">
          <div className="flex bg-brown-500  w-[85%] mx-auto items-center justify-center my-[5%] flex-col">
              <h1 className="font-heading text-bold text-white-500 text-[50px] font-bold px-[20%] p-6">Guidelines For Good Health</h1>
              <div className="h-[40vh] bg-black"> </div>
          </div>
        </div>
      </section>
      {/* ========================================Subscription form============================== */}
      <section className="h-[120vh] bg-black" > 
       
      <div className="relative h-[100%] overflow-hidden  flex justify-center">
            <div className="absolute flex flex-col w-full z-10 top-16 left-24">
                      <div className="space-y-2">
                          <h1 className="font-poppins font-extrabold text-4.5xl absolute">What our customers are saying</h1>
                          <div className="mt-3"><p>Get inspired by these stories</p></div>
                      </div>
            </div>

            <div className=" absolute bg-brown-400 w-[85%] p-14 my-8 justify-center h-[75vh] z-40">
                          
            </div>
            <div className=" mt-72 z-20">
                <Image src="/leafbg.svg" className="" alt="quotes" width={5262.7} height={1662.16} />
            </div>  
        </div>

      </section>
    </>
  );
};

export default Home;
