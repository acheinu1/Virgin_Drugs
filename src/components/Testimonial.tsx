import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Autoplay from 'embla-carousel-autoplay'


export default function Testimonial(props) {

  // emblaRef will be a reference to our carousel viewport
  const [emblaRef, embla] = useEmblaCarousel({

    align: "start",
    // aligns the first slide to the start
    // of the viewport else will align it to the middle.

    loop: true,
    // we need the carousel to loop to the
    // first slide once it reaches the last slide.

    skipSnaps: false,
    // Allow the carousel to skip scroll snaps if
    // it's dragged vigorously.

    inViewThreshold: 0.7,
    // percentage of a slide that need's to be visible
    // inorder to be considered in view, 0.7 is 70%.
  }, [Autoplay({stopOnMouseEnter:true})]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // this function allow's us to scroll to the slide whose
  // id correspond's to the id of the navigation dot when we
  // click on it.

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  // set the id of the current slide to active id
  // we need it to correctly highlight it's corresponding
  // navigation dot.

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  // make sure embla is mounted and return true operation's
  // can be only performed on it if it's successfully mounted.

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className=" mx-auto max-w-6xl pb-[10%] " id="testimonials">
      {/* title */}
     
        <div><h1 className=" font-heading text-[30px] font-bold text-white-500  md:text-[50px]  px-[8%] py-[4%] text-center">Testimonies</h1></div>
      
      <div className="overflow-hidden bg-brown-400" ref={emblaRef}>
      
        <div className="flex w-[400%] items-center ">
       
              {/* Slide 1_____________________________________________________________________ */}
              <div className="embla__slide w-[100%] flex 0 0 100% items-center ">
                  <div className="flex flex-col md:flex-row m-4">
                        <div><Image src="/1.svg" height={1600} width={2000} /></div>
                        <div className=" mx-0 md:mx-12 items-start">
                            <h3 className="font-heading leading-tight text-[14px] md:text-[20px] text-white-default">TWO YEAR HISTORY OF PERSISTENT PAINS IN THE LUNGS AND <br/>DIFFICULTY BREATHING</h3>
                            <p className="text-[12px] md:text-[14px] text-white-400 mt-4 opacity-80">
                            In 2015, I proposed that ALL diseases could be cured using the right proportions of food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                            We therefore present this case of a 32 year old Anambra State indigene resident in Mararaba Nasarawa State, Nigeria. In 2020, he developed persistent pains in the lungs and difficulty breathing (suspected pneumonia).
                            In October 2021, he used our patented FUDELT METHOD ( NG/P/2016/450), which is a customized nutrient support service, for one month.
                            Presently, the pains in the lungs have stopped and he breathes normally. We thank God.
                            <br/>
                            <p className="mt-3 italic">FUDELT METHOD... Food against diseases!</p>
                            </p>
                        </div>
                  </div>
              </div>
              {/* Slide 2_____________________________________________________________________ */}
              <div className="embla__slide w-[100%] flex 0 0 100% ">
              <div className="flex m-4 flex-col md:flex-row">
                        <div><Image src="/2.svg" height={1600} width={2000} /></div>
                        <div className=" mx-0 md:mx-12 items-start">
                            <h3 className="font-heading leading-tight text-[14px] md:text-[20px] text-white-default">ABOLISHED! SEVEN YEARS OF PUS-PRODUCING DIABETIC GANGRENE AND CHRONIC DIARRHEA</h3>
                            <p className="text-[12px] md:text-[14px] text-white-400 mt-4 opacity-80">
                            In 2015, I proposed that ALL diseases could be cured using the right proportions of food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                            We hereby present the case of a middle aged obese man resident in Jabi FCT, Nigeria. In 2014 he underwent surgery to remove gangrenous (rotten) tissues inside his buttocks near the anus. Soon afterwards, the gangrene reappeared in another part of his buttocks and was exuding pus. He also developed chronic diarrhea. Fasting blood sugar test showed prediabetes. 
                            In May 2021, he used our patented FUDELT METHOD ( NG/P/2016/450), which is a customized nutrient support service, for six weeks.
                            Thereafter and up till now, the gangrenous buttocks has healed up and the diarrhea has stopped. We thank God
                            <br/>
                            <p className="mt-3 italic">FUDELT METHOD... Food against diseases!</p>
                            </p>
                        </div>
                  </div>
              </div>
              {/* Slide 3_____________________________________________________________________ */}
              <div className="embla__slide w-[100%] flex 0 0 100%">
              <div className="flex  m-4 flex-col md:flex-row">
                        <div><Image src="/3.svg" height={1600} width={2000} /></div>
                        <div className="mx-0 md:mx-12 items-start">
                            <h3 className="font-heading leading-tight text-[14px] md:text-[20px] text-white-default">DEMOLISHED! STAPHYLOCOCCUS AUREUS INFECTION</h3>
                            <p className="text-[12px] md:text-[14px] text-white-400 mt-4 opacity-80">
                             In 2015, I proposed that ALL diseases could be cured using the right proportions of food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                             We hereby present this case for a Nasarawa state businessman. On October 25, 2021, urine MCS showed significant growth of Staphylococcus aureus with resistance to many antibiotics. The man had slight fever.
                             He used our patented FUDELT METHOD ( NG/P/2016/450), which is a customized nutrient support service, for three weeks.
                             Thereafter, repeat MCS showed no growth of Staphylococcus aureus and the fever was gone. All laboratory results are with us. We thank God.
                            <br/>
                            <p className="mt-3 italic">FUDELT METHOD... Food against diseases!</p>
                            </p>
                        </div>
                  </div>
              </div>
              {/* Slide 4_____________________________________________________________________ */}
              <div className="embla__slide w-[100%]">
              <div className="flex  m-4 flex-col md:flex-row">
                        <div><Image src="/4.svg" height={1600} width={2000} /></div>
                        <div className="mx-0 md:mx-12 items-start">
                            <h3 className="font-heading leading-tight text-[14px] md:text-[20px] text-white-default">GOODBYE,  CHRONIC  ARTHRITIS!</h3>
                            <p className="text-[12px] md:text-[14px] text-white-400 mt-4 opacity-80">
                            In 2015, I proposed that ALL diseases could be cured using the right proportions of food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). The research which began in 2012 was presented in 2018 at  the WANNPRES international conference.
                            We therefore present this case for a  middle aged woman who worships at St Joseph's Catholic Church,  Jabi Dakibiu, Abuja. For two years,  she suffered severe bone and joint pains which sometimes  caused her sleepless nights.  Walking  and kneeling  was difficult for her.
                            In February  2021, she started  using our patented FUDELT METHOD ( NG/P/2016/450), which is a customized nutrient support service. By August 2021, all symptoms  of chronic  arthritis were gone. She now walks about  very actively  and kneels freely  in church. We thank God.
                            <br/>
                            <p className="mt-3 italic">FUDELT METHOD... Food against diseases!</p>
                            </p>
                        </div>
                  </div>
              </div>
            

        </div>
        </div>
        <div className="flex items-center justify-center mt-5 space-x-2">
  {scrollSnaps.map((_, idx) => (
    <button
      className={`w-2 h-2 rounded-full ${
        idx === selectedIndex ? "bg-brown-500" : "bg-gray-300"
      }`}
      key={idx}
      onClick={() => scrollTo(idx)}
    />
  ))}
</div>
    </div>
  )
}