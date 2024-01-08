import Card from "../components/Card";
import ExchangeChart from "../components/ExchangeChart";
import Sponsors from "../components/Sponsors";
import { cn } from "../utils/cn";
import statsImg from "../assets/images/Illustration-building.png";
import secureImg from "../assets/images/Illustration-secure.png";
import creditCardImg from "../assets/images/Illustration-wallet.png";
import TestimonialCard from "../components/TestimonialCard";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <div
        className={cn(
          // Base styles
          "bg-bgImg bg-center bg-cover bg-no-repeat",
          // Large Screens
          ""
        )}
      >
        <div
          className={cn(
            //Large Screens
            "w-full max-w-6xl mx-auto"
          )}
        >
          {/* =============== Hero Section =============== */}
          <div
            className={cn(
              //Base styles
              "grid grid-cols-1 gap-12 pt-32",
              //Large Screens
              "md:items-center md:justify-between md:grid-cols-2"
            )}
          >
            <div className="text-white max-w-max px-4 md:px-3">
              <p className="text-4xl font-normal md:text-[2.56rem]">
                Sell Gift Cards, <br /> Paypal Funds
              </p>
              <h2 className="text-[2.81rem] font-bold md:text-[3.75rem]">
                for Instant Cash 🇳🇬
              </h2>
              <p className="text-base my-8">
                The most trusted Naira swap platform
              </p>
              <div className="w-full grid grid-cols-2 gap-5">
                <button className="col-span-2 bg-black text-white text-center rounded-2xl py-5">
                  Google Play
                </button>
                <button className="bg-black text-white text-center rounded-2xl py-5">
                  Start on web
                </button>
                <button className="bg-black text-white text-center rounded-2xl py-5">
                  Start on chat
                </button>
              </div>
            </div>
            <ExchangeChart />
            <Sponsors />
          </div>
        </div>
      </div>
      {/* =============== Cards Section =============== */}
      <div className="bg-[#F5F7FA] py-7 md:py-24">
        <div
          className={cn(
            //Base Styles
            "w-full max-w-6xl mx-auto px-4 grid grid-cols-1 gap-7",
            //Large Screens
            "md:grid-cols-2 md:gap-16"
          )}
        >
          <Card
            img={statsImg}
            title="Amazing Rates 🥇"
            text="We offer market-leading gift card rates
to maximize the value of your funds."
          />
          <Card
            img={secureImg}
            title="Secure & Safe 💯"
            text="Our SSS security system guarantees comprehensive protection of your transaction security.
No Ripping. No Delay. No Scam."
          />
          <Card
            img={statsImg}
            title="High Rewards 💰"
            text="Earn up to 10% extra cash with our rating system,
referral system, coupons and quest system."
          />
          <Card
            img={creditCardImg}
            title="Fast Pay Out 💳"
            text="Your payments can be deposited
into your account within minute."
          />
          <div className="bg-white p-7 flex flex-col items-center text-center rounded-lg shadow-lg md:flex-row md:p-10 md:col-span-2 md:text-left">
            <div className="w-48 h-48 md:flex-1 md:w-[unset] md:h-[unset]">
              <img
                src="https://www.cardeaze.com/img/pic_refer.png"
                alt=""
                className="w-full mx-auto object-cover md:w-[75%]"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl md:text-5xl">
                <b>Refer</b> and <b>Win</b>
              </h3>
              <p className="my-7">
                Invite friends to sell gift cards, paypal funds together, and
                you can earn cash rewards from every transaction your friends
                make. <br />
                <b>More friends, More rewards.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Testimonial Section =============== */}
      <div className="bg-[#F5F7FA] py-7">
        <div className="w-full max-w-6xl mx-auto px-4">
          <h4 className="font-bold text-[28px] text-center md:text-[2.5rem]">
            Our 20k+ customers: in their own words
          </h4>
          <p className="text-center my-4">
            The great appreciation of our customers speaks louder than us!
          </p>
          <div className="flex gap-5 items-center my-4 mx-auto w-fit">
            <img
              src="https://www.cardeaze.com/img/icon_star.png"
              alt=""
              className="w-9"
            />
            <img
              src="https://www.cardeaze.com/img/icon_star.png"
              alt=""
              className="w-9"
            />
            <img
              src="https://www.cardeaze.com/img/icon_star.png"
              alt=""
              className="w-9"
            />
            <img
              src="https://www.cardeaze.com/img/icon_star.png"
              alt=""
              className="w-9"
            />
            <img
              src="https://www.cardeaze.com/img/icon_star.png"
              alt=""
              className="w-9"
            />
          </div>
          <div className="my-7 grid grid-cols-1 gap-10 md:grid-cols-3">
            <TestimonialCard
              message="I've tried several gift card exchange apps before, but Fentrade is by far the best. The interface is user-friendly and the customer support is amazing. Happy customer!"
              img="https://www.cardeaze.com/img/user1.png"
              name="Sarah"
            />
            <TestimonialCard
              message="Fentrade has been a lifesaver for me when I need to quickly convert my gift cards into Naira. Highly recommend!"
              img="	https://www.cardeaze.com/img/user2.png"
              name="Mandisa"
            />
            <TestimonialCard
              message="I can't believe how fast I received my payment through Fentrade. The process was smooth and hassle-free. Definitely my go-to app for exchanging gift cards for Naira!"
              img="https://www.cardeaze.com/img/user3.png"
              name="Michael"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F5F7FA] py-7">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Cta />
        </div>
      </div>
      <Footer />
    </>
  );
}
// F5F7FA;
