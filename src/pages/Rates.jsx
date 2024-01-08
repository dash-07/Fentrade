import Cta from "../components/Cta";
import Footer from "../components/Footer";
export default function Rates() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="bg-bgImg bg-center bg-cover h-[330px]"></div>
      <div className="-mt-[120px] mb-10 w-full max-w-6xl mx-auto px-4">
        <h2 className="text-white font-bold text-[2.5rem] text-center my-4">
          Rate Calculator
        </h2>
        <div className="my-7 px-4 py-6 bg-white rounded-lg flex items-center justify-center">
          <form className="w-full md:w-[50%]">
            <div className="select-wrapper relative w-full mb-6">
              <select defaultValue="I want to sell" className="select">
                <option>I want to sell</option>
                <option>Apple/iTunes</option>
                <option>Steam</option>
                <option>Paypal</option>
                <option>Razer Gold</option>
              </select>
            </div>
            <div className="select-wrapper relative w-full mb-6">
              <select defaultValue="Select a Category" className="select">
                <option>Select a Category</option>
                <option>US [30 and above]</option>
              </select>
            </div>
            <div className="w-full px-4 py-2 text-[#4F5564] border border-gray-400 rounded-[4px]">
              <input
                type="text"
                placeholder="Balance"
                className="w-full h-full border-none outline-none"
              />
            </div>
            <div className="flex flex-col mx-auto my-7 w-fit gap-3 text-center">
              <span>Value</span>
              <p className="text-5xl text-[var(--blue)] font-bold">
                <span className="text-[#7fbaf1]">₦</span>0
              </p>
            </div>

            <button className="w-full py-3 text-center text-white font-semibold bg-gradient-to-r from-[#00167C] to-[#2048FF] rounded-lg">
              Trade Now
            </button>
          </form>
        </div>
        <Cta />
      </div>
      <Footer />
    </div>
  );
}
