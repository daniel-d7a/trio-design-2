import { Carousel } from "antd";

export default function HeroCarousel() {
  return (
    <>
      <Carousel
        className=""
        arrows
        // nextArrow={<div className="border-2 border-red-500"></div>}
        // prevArrow={<></>}
        autoplay
        effect="fade"
      >
        {[
          "https://source.unsplash.com/KSfe2Z4REEM",
          "https://source.unsplash.com/9M66C_w_ToM",
          "https://source.unsplash.com/4xRP0Ajk9ys",
        ].map((link) => (
          <div key={link} className="relative h-[89vh] pt-[4vh]">
            <img
              src={link}
              alt=""
              className="absolute blur-md z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120vh] mx-auto"
            />
            <img src={link} alt="" className="relative z-50 h-[78vh] mx-auto" />
          </div>
        ))}
      </Carousel>
    </>
  );
}
