export default function GetToKnow() {
  return (
    <div className="flex justify-evenly items-center py-10">
      <div className="relative w-2/5 h-[70vh]">
        <img
          className="absolute z-20 w-32 -bottom-6 right-24 rounded-md"
          src="https://source.unsplash.com/zrebaMbVfac"
          alt=""
        />
        <img
          className="absolute w-40 z-10 right-6 top-6 rounded-md"
          src="https://source.unsplash.com/dLmlYKuoJBc"
          alt=""
        />
        <img
          className="absolute w-80 rounded-md z-10"
          src="https://source.unsplash.com/zRXbV0XhlN8"
          alt=""
        />
        <div
          className="absolute right-2 top-2/3 -translate-y-1/2 w-60 h-40 "
          style={{
            backgroundImage:
              "radial-gradient(#2a2a2a 1.5px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        >
          {" "}
        </div>
      </div>

      <div className="text-black w-2/5">
        <h3 className="text-3xl mb-6">Get To Know TRIO Design</h3>
        <p className="text-lg text-gray-800">
          The experience gained by the owners through years of working in big
          furniture companies trio designs was working big We managed to produce
          furniture for big brands as a start through our professional finishes,
          accurate time frames and our clients confidence, though we're still at
          the beginning and we still keep our promise...
          <span className="block font-bold mt-4">You Name It... We Make It</span>
        </p>
      </div>
    </div>
  );
}
