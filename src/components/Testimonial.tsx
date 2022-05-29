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
    <div className="py-12 mx-auto max-w-6xl px-5 ">
      {/* title */}
     
        <div><h1 className=" font-heading text-[30px] font-bold text-white-500  md:text-[50px]  px-[8%] py-[10%] pt-[20%] md:py-[6%] md:px-[10%]  text-center">Testimonies</h1></div>
      
      <div className="overflow-hidden bg-brown-400" ref={emblaRef}>
      
        <div className="flex ">
       
          {props.posts.map((post) => (
            <div
              className="relative flex flex-none flex-wrap lg:flex-nowrap w-full mx-10"
              key={post.attributes.Title}
            >
              <div className="overflow-hidden cursor-pointer lg:w-1/4">
                
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <Image
                     src={post?.attributes?.BlogThumbnail?.data?.attributes?.url??''}
                      height={514}
                      width={800}
                      className="rounded-lg"
                      alt="cover image"
                     // placeholder="blur"
                     // blurDataURL={post.image_cover}
                    />
                  </a>
                </Link>
              </div>
              {/* content */}
              <div className="flex flex-col space-y-4 lg:w-4/5 lg:space-x-20 lg:justify-center">
                {/* tags and date */}
                <div className="flex text-sm mt-4 space-x-5 lg:mx-20">
                  <p className="font-bold dark:text-white">{post.tags}</p>
                  <p className="font-normal text-white-600 ">
                    {/* {format(parseISO(post.publishedAt), "MMMM dd, yyyy")} */}
                    In 2015, I proposed that ALL diseases could be cured using the right proportions of food nutrients (Journal of Global Biosciences ISSN 2320-1355, Vol.9, No. 4, 2020). The research which began in 2012 was presented in 2018 at  the WANNPRES international Conference.
                    We therefore present this case of a 32 year old Anambra State indigene resident in Mararaba Nasarawa State, Nigeria. In 2020, he developed persistent pains in the lungs and difficulty breathing (suspected pneumonia).
                    In October 2021, he used our patented FUDELT METHOD ( NG/P/2016/450), which is a customized nutrient support service, for one month.Presently, the pains in the lungs have stopped and he breathes normally. We thank God.
                    FUDELT METHOD... Food against diseases!

                  </p>
                </div>
                {/* title */}
                <Link href={`/blog/${post.slug}`}>
                  <a className="cursor-pointer">
                    <h2 className="text-3xl lg:text-4xl font-bold dark:text-gray-100">
                      {post.title}
                    </h2>
                  </a>
                </Link>
                <Link href={`/blog/${post.slug}`}>
                  <a className="cursor-pointer">
                    <p className="text-gray-500 text-justify">{post.summary}</p>
                  </a>
                </Link>
                <div className="flex items-center">
                  {/* <div className="h-12 w-12">
                    <Image
                      src="/img/avatar-banner-360x360.png"
                      height="260"
                      width="260"
                      alt="avatar image"
                      className="rounded-full"
                    />
                  </div> */}
                  <div className="flex flex-col mx-4 space-y-1">
                    <strong className="text-sm text-white-default">
                      Princess acheinue
                      {/* {post.author} */}
                    </strong>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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