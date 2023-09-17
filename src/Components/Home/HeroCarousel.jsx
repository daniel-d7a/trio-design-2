import { Carousel } from "antd";

export default function HeroCarousel() {
  return (
    <div className="">
      {/* <div className="w-2/5">
        <h3 className="text-3xl text-black mb-6">Get To Know TRIO Design</h3>
        <p className="text-lg text-gray-800">
          The experience gained by the owners through years of working in big
          furniture companies trio designs was working big We managed to produce
          furniture for big brands as a start through our professional finishes,
          accurate time frames and our clients confidence, though we&apos;re still at
          the beginning and we still keep our promise...
          <span className="block font-bold mt-4">
            You Name It... We Make It
          </span>
        </p>
      </div> */}

      <Carousel autoplay effect="fade">
        {carouselData.map(
          ({
            link,
            mobileLink,
            title,
            text,
            color,
            color2,
            mobileColor,
            mobileColor2,
          }) => (
            <>
              <div
                key={link}
                className="relative h-[89vh] font-inter md:h-[73vh] lg:h-[89vh]"
              >
                {/* for desktop screens */}
                <div className="hidden lg:block">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, ${color} 15%, transparent)`,
                    }}
                    className={`absolute left-0 top-1/2 z-50 hidden h-full w-3/5 -translate-y-1/2 p-12 text-white lg:block`}
                  >
                    <h2 className="mb-12 mt-20 w-3/5 text-6xl font-bold">
                      {title}
                    </h2>
                    <p className="w-3/5 text-2xl font-normal">{text}</p>
                  </div>
                  <img
                    src={link}
                    alt=""
                    className="relative z-30 mx-auto mt-2 hidden h-[90vh] lg:block"
                  />
                </div>

                {/* for tablets */}
                <div className="hidden sm:block lg:hidden">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to top, ${color} 10%, ${color2} 75%, transparent)`,
                    }}
                    className={`absolute bottom-0 z-50  h-[43%] w-full p-12 text-white `}
                  >
                    <h2 className="mb-12 text-5xl font-bold">{title}</h2>
                    <p className="text-2xl font-normal">{text}</p>
                  </div>
                  <img
                    src={link}
                    alt=""
                    className="relative z-30 mx-auto mt-2 h-[70vh] "
                  />
                </div>

                {/* for phones */}
                <div className="block sm:hidden">
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to top, ${mobileColor} 10%, ${mobileColor2} 75%, transparent)`,
                    }}
                    className={`absolute bottom-0 z-50 h-2/3 w-full p-12 text-white`}
                  >
                    <h2 className="mb-12 text-4xl font-bold">{title}</h2>
                    <p className="text-xl font-normal">{text}</p>
                  </div>
                  <img
                    src={mobileLink}
                    alt=""
                    className="relative z-30 mx-auto mt-2 h-[90vh] w-full object-center"
                  />
                </div>
              </div>
            </>
          ),
        )}
      </Carousel>
    </div>
  );
}

const carouselData = [
  {
    link: "https://source.unsplash.com/KSfe2Z4REEM",
    mobileLink: "https://source.unsplash.com/ajcet7UJJwY",
    color: "#4d7074",
    color2: "#4d707477",
    mobileColor: "#54839f",
    mobileColor2: "#54839f77",
    title: "Elevate Your Space with Timeless Elegance",
    text: "Discover our exquisite collection of furniture, meticulously crafted to bring sophistication and charm to your home",
  },
  {
    link: "https://source.unsplash.com/9M66C_w_ToM",
    mobileLink: "https://source.unsplash.com/jxbdO7YXL8Y",
    color: "#bebfb9",
    color2: "#bebfb977",

    mobileColor: "#d5d5ce",
    mobileColor2: "#d5d5ce77",

    title: "Uncompromising Quality for Lasting Comfort",
    text: "Experience the unparalleled comfort and durability of our furniture, designed with the finest materials and expert craftsmanship.",
  },
  {
    link: "https://source.unsplash.com/4xRP0Ajk9ys",
    color: "#9e9171",
    color2: "#9e917177",
    mobileLink: "https://source.unsplash.com/Q_fZcn8vlWY",
    mobileColor: "#d5d5ce",
    mobileColor2: "#d5d5ce77",
    title: "Tailored Solutions for Every Lifestyle",
    text: "Discover our versatile furniture range, thoughtfully designed to complement your unique lifestyle and aesthetic preferences",
  },
];
