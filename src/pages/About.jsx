import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-bgImg bg-center bg-cover h-[330px]"></div>
      <div className="-mt-[180px] md:-mt-[120px] mb-10 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-white font-bold text-3xl md:text-[2.5rem] text-center my-7">
          About Fentrade
        </h2>
        <div className="bg-white my-4 p-6 w-full mx-auto rounded-lg shadow-lg flex flex-col gap-6 md:flex-row">
          <div className="rounded-tr-[3rem] rounded-bl-[3rem] w-full">
            <img
              src="https://www.cardeaze.com/img/about-banner.png"
              alt=""
              className="object-cover w-full h-full max-h-[150px] rounded-tr-[3rem] rounded-bl-[3rem] md:max-h-[unset]"
            />
          </div>
          <div>
            <p className="my-3">
              We are a leading gift card trading platform dedicated to providing
              a safe and convenient platform for selling gift cards.
            </p>
            <p className="my-3">
              With our user-friendly interface and secure payment methods, we
              aim to simplify the gift card trading process and ensure customer
              satisfaction.
            </p>
          </div>
        </div>
        {/* =============== Mission =============== */}
        <div className="my-20 md:flex">
          <h4 className="text-3xl font-bold md:flex-[2]">Our Mission</h4>
          <div className="bg-white my-4 p-6 w-full mx-auto rounded-lg shadow-lg md:flex-[4] md:my-0">
            <p className="my-3 md:my-2">
              Our mission is to connect gift card buyers and sellers from around
              the world, offering a seamless trading experience.
            </p>
            <p className="my-3 md:my-2">
              We strive to create a trustworthy and transparent marketplace that
              empowers individuals to maximize the value of their gift cards
              while providing great deals for those looking to buy discounted
              gift cards.
            </p>
          </div>
        </div>
        {/* =============== Vision =============== */}
        <div className="my-20 md:flex">
          <h4 className="text-3xl font-bold md:flex-[2]">Our Vision</h4>
          <div className="bg-white my-4 p-6 w-full mx-auto rounded-lg shadow-lg md:flex-[4] md:my-0">
            <p className="my-3 md:my-2">
              Our vision is to become the premier online destination for gift
              card trading. We envision a global community of users who trust
              our platform for their gift card transactions, recognizing us for
              our reliability, excellent customer service, and commitment to
              creating a seamless trade environment.
            </p>
          </div>
        </div>
        {/* =============== Photo Grid =============== */}
        <div className="w-full grid grid-cols-2 gap-5 mb-10 md:mb-20">
          <div className="col-span-2 rounded-tr-[3rem] rounded-bl-[3rem] max-h-[18.75rem] md:row-span-2 md:col-start-1 md:col-end-2 md:max-h-[31.25rem]">
            <img
              src="	https://www.cardeaze.com/img/teams2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
          <div className="rounded-tr-[3rem] rounded-bl-[3rem] max-h-[17.18rem] md:row-start-1 md:col-start-2 md:row-end-2 md:col-end-3 md:max-h-60">
            <img
              src="https://www.cardeaze.com/img/teams3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
          <div className="rounded-tr-[3rem] rounded-bl-[3rem] max-h-[17.18rem] md:row-start-2 md:col-start-2 md:row-end-3 md:col-end-3 md:max-h-60">
            <img
              src="	https://www.cardeaze.com/img/teams1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-tr-[3rem] rounded-bl-[3rem]"
            />
          </div>
        </div>
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
