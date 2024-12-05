import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  const slides = [
    {
      image: "https://i.ibb.co/1KDKLmy/tyson-moultrie-BQTHOGNHo08-unsplash.jpg",
      title: "Action Thrillers",
      description:
        "Explore a collection of heart-pounding action thrillers that keep you on the edge of your seat. Explosions, car chases, and high-stakes drama await!",
      buttonText: "Watch Now",
      buttonLink: "#action-thrillers",
    },
    {
      image: "https://i.ibb.co/KWpyNcD/henry-co-21-HT36zw-Ln8-unsplash.jpg",
      title: "Romantic Comedies",
      description:
        "Laugh, cry, and fall in love with our curated selection of romantic comedies. Perfect for date nights or when you need a mood lift.",
      buttonText: "Browse Movies",
      buttonLink: "#romantic-comedies",
    },
    {
      image:
        "https://i.ibb.co/y6Tx0Xj/abdulla-faiz-e-ZA7l-St-Pshc-unsplash.jpg",
      title: "Epic Adventures",
      description:
        "Dive into fantastical worlds and epic adventures that transport you beyond the ordinary. Experience stories that ignite the imagination.",
      buttonText: "Start Watching",
      buttonLink: "#epic-adventures",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className=" ">
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper -z-50"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="h-[450px]">
              <img
                src={slide?.image}
                alt={slide?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl font-bold mb-2">{slide?.title}</h2>
              <p className="text-lg mx-4 md:mx-20 text-center mb-4">
                {slide?.description}
              </p>
              <a
                href={slide?.buttonLink}
                className="px-10 btn  btn-success text-white font-semibold rounded-full text-lg"
              >
                {slide?.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl rounded-full  bg-white text-black z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <MdChevronLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl rounded-full  bg-white text-blackl z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Banner;
