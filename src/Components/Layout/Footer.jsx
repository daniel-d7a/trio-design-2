export default function SiteFooter() {
  return (
    <>
      <footer className="relative flex flex-col space-y-8 py-6 pt-60 font-inter text-lg sm:flex-row sm:items-start sm:justify-start sm:space-x-20 sm:space-y-0 sm:pt-8">
        <div className="sm:w-1/4">
          <h4 className="mb-4">TRIO Design</h4>
          <p>
            Call us now for stylish and quality pieces to elevate your living
            space. Exceptional service and a wide selection guaranteed.
          </p>
        </div>
        <div>
          <p className="mb-4 font-bold">Home</p>
          <p>Home</p>
          <p>Products</p>
          <p>Contact us</p>
        </div>
        <div>
          <p className="mb-4 font-bold">Categories</p>
          <p>Indoor</p>
          <p>Outdoor</p>
          <p>Hospitality</p>
        </div>
        <div>
          <p className="mb-4 font-bold">Contact us</p>
          <p>Whatsapp</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <img
          src="https://pngimg.com/uploads/armchair/armchair_PNG7062.png"
          className="absolute -top-44 w-80 sm:-top-28 sm:right-0"
        />
      </footer>
    </>
  );
}
