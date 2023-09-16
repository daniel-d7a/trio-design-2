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
        {[
          "https://source.unsplash.com/KSfe2Z4REEM",
          "https://source.unsplash.com/9M66C_w_ToM",
          "https://source.unsplash.com/4xRP0Ajk9ys",
        ].map((link) => (
          // <>
          //   <img
          //     src={link}
          //     alt=""
          //     className="relative z-50 h-[35vh] mx-auto mt-2"
          //   />
          // </>
          //#region blur bg
          <>
            <div key={link} className="relative h-[89vh] pt-[4vh]">
              <img
                src={link}
                alt=""
                className="absolute blur-md z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120vh] mx-auto"
              />

              <img
                src={link}
                alt=""
                className="relative z-50 h-[75vh] mx-auto mt-2"
              />
            </div>
          </>
          //#endregion
        ))}
      </Carousel>
    </div>
  );
}
