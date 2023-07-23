export default function SiteFooter() {
  return (
    <>
      <footer className=" flex justify-start space-x-20 items-start text-lg py-6 relative">
        <div className="w-1/4">
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
          className="w-80 absolute right-0 -top-28 "
        />
      </footer>
    </>
  );
}
