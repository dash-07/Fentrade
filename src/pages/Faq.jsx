import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";

export default function Faq() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-bgImg bg-center bg-cover h-[330px]"></div>
      <div className="-mt-[180px] md:-mt-[120px] mb-10 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-white font-bold text-3xl md:text-[2.5rem] text-center my-7">
          Frequently Asked Question
        </h2>
        <div className="bg-white my-4 p-6 w-full mx-auto rounded-lg shadow-lg flex flex-col gap-6 md:flex-row">
          {/* =============== Section 1 =============== */}
          <div>
            <div className="flex flex-col items-center gap-4">
              <img
                src="https://www.cardeaze.com/img/icon_about.svg"
                alt=""
                width={50}
                height={50}
              />
              <p className="text-xl">About Fentrade</p>
            </div>
            {/* <div className="relative px-4 py-2 my-4 bg-[#F3F4F5] rounded-lg">
              <input type="radio" name="faq1" id="faq1" className="hidden" />
              <label
                htmlFor="faq1"
                className=
                  "cursor-pointer flex justify-between items-center">
                <p>What is Fentrade?</p>
                <span
                  className="text-[2rem] transition-transform duration-500"
                >
                  +
                </span>
              </label>
              <p className="max-h-0 overflow-hidden transition-all duration-700 ease-in">
                Fentrade is an advanced digital retail exchange platform
                dedicated to the efficient conversion of unused gift cards into
                cash. Since our inception, we have been committed to providing
                users with simple, fast and secure gift card selling solutions.
                You can sell gift cards at the most competitive prices in the
                market. 💰Get cash instantly, 💸Earn rewards. We strive to be
                the most trusted gift card trading platform. Get started
                immediately here
              </p>
            </div> */}
            <Accordion
              title="What is Fentrade"
              content="<p>
                Fentrade is an advanced digital retail exchange platform
                dedicated to the efficient conversion of unused gift cards into
                cash. Since our inception, we have been committed to providing
                users with simple, fast and secure gift card selling solutions.
                You can sell gift cards at the most competitive prices in the
                market. 💰Get cash instantly, 💸Earn rewards. We strive to be
                the most trusted gift card trading platform. Get started
                immediately here
              </p>"
            />
            <Accordion
              title="How to Contact Fentrade?"
              content="<p>
                <b>1. Support System</b> <br /> With our
                support system, you can ask questions about each order and we
                will answer your questions ASAP.
                <br /> <b>2. Email Communication</b>
                <br /> you can reach us via email at support@fentrade.com. Share
                your concerns, questions, or feedback.
              </p>"
            />
            <Accordion
              title="Are you always online?"
              content="<p>
                Yes, we maintain 24/7 online presence to provide our customers
                with the highest level of support and service.
              </p>"
            />
            <Accordion
              title="Can I Switch My Account Country?"
              content="<p>
                Sorry, you cannot switch your account country. The currency and
                products available to you will be determined by the country you
                choose when registering.
              </p>"
            />
          </div>
        </div>
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
