import { BsTelephoneFill } from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function ContactUs() {
  return (
    <>
      <h2 className="my-4 text-center text-4xl text-black">Contact Us</h2>
      <div className="m-auto mb-44 flex h-[75vh] w-screen flex-col items-start justify-start gap-4 overflow-x-hidden  text-black sm:mb-20 sm:h-[60vh] md:w-4/5 lg:w-full lg:flex-row lg:justify-center lg:px-8 xl:h-[65vh]">
        <div className=" relative h-full w-full max-w-xs overflow-hidden p-4 sm:max-w-fit sm:self-center lg:max-w-md  lg:self-start">
          <span className="relative z-10 text-3xl font-semibold capitalize lg:text-5xl">
            have a question? get in touch.
          </span>
          <p className="relative z-10 mt-2  text-xl">
            Feel free to contact us via email, or through social media.
          </p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/022/025/108/original/beige-sofa-isolated-on-a-transparent-background-png.png"
            className="absolute -left-80  top-24 hidden w-[50vw] lg:block"
          />
        </div>
        <div className="flex w-full flex-col gap-4 p-4 text-xl capitalize">
          <label className="flex flex-col  font-semibold">
            email
            <input
              className="border-0 border-b-2 border-b-dark-green bg-white py-2 text-lg text-black outline-none "
              name="email"
              placeholder="Email"
            />
          </label>
          <label className="flex flex-col font-semibold">
            subject
            <input
              className=" border-0 border-b-2 border-b-dark-green bg-white py-2 text-lg text-black outline-none"
              name="subject"
              placeholder="Subject"
            />
          </label>
          <label className="flex flex-col font-semibold">
            message
            <textarea
              className="h-20 resize-none border-0 border-b-2 border-b-dark-green bg-white py-2 text-lg text-black outline-none"
              name="message"
              placeholder="Message"
            />
          </label>
          <button className="h-10 cursor-pointer rounded-md border-none bg-dark-green font-semibold text-white transition-all hover:bg-green-900">
            Submit
          </button>
        </div>
        {/* <Phone icon={<BsTelephoneFill />} text="+2 01551937083" /> */}
        <div className="flex gap-2 self-center lg:ml-10 lg:flex-col">
          <ContactLink
            icon={<BiLogoFacebook />}
            to="https://www.facebook.com/profile.php?id=100087017378525"
          />
          <ContactLink
            icon={<BiLogoInstagram />}
            to="https://www.instagram.com/triodesigns53/"
          />
          <ContactLink
            icon={<BiLogoWhatsapp />}
            to="https://api.whatsapp.com/send?phone=%2B201007504678&data=AWBXtv_uBk8YoHIBdZgd2JjATOj4ouq6MDXz5J4nDuOYL5az8OgYKTXPY-aG7PN-zY3poilJkp2e4bZluORqMnbZJUQuW3UZcpCfBpwuaCGG56e8bWYFnqvSp3fO1ucyyr-5vvvTbmftmfVlvcHYvlGsIr3S5QFLqjBplZF1e9flj4eT3pZpnUelubMT53sPiyklIOGCPsoawiIsFG9PFpgzrq__NmhsjQpHZbPAiOmDuyEftWRjm6DxmenzLZqRs2OXtfSFFZlIYYb3ka_e5w&source=FB_Page&app=facebook&entry_point=page_cta"
          />
        </div>
      </div>
    </>
  );
}

function ContactLink({ icon, to }) {
  return (
    <>
      <a href={to} target="_blank" rel="noreferrer">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-light-green p-4 text-dark-green">
          <span className="text-3xl">{icon}</span>
        </div>
      </a>
    </>
  );
}
function Phone({ icon, text, to }) {
  return (
    <>
      <a href={to} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center gap-4 bg-light-green p-4 text-dark-green">
          <span className="text-2xl">{icon}</span>
          <span className="font-semibold">{text}</span>
        </div>
      </a>
    </>
  );
}
