import useSlider from "../hooks/useSlider";
import { cn } from "../utils/cn";

export default function Sponsors() {
  useSlider("slider");

  return (
    <div
      id="slider"
      className={cn(
        // Base Styles
        "bg-white px-6 flex items-center h-24 w-full gap-7 overflow-x-hidden touch-none shadow-xl",
        // Large Screens
        "md:mx-auto md:w-[95%] md:col-span-2 md:px-10 md:justify-between md:gap-0 md:rounded-t-xl"
      )}
    >
      <img
        src="https://www.cardeaze.com/img/icon_apple.png"
        alt=""
        className="drag-none w-10 h-10 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_paypal.png"
        alt=""
        className="drag-none w-24 h-14 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_steam.png"
        alt=""
        className="drag-none w-11 h-11 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_cashapp.png"
        alt=""
        className="drag-none w-20 h-11 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_razer.png"
        alt=""
        className="drag-none w-12 h-12 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_amazon.png"
        alt=""
        className="drag-none w-20 h-7 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_google.png"
        alt=""
        className="drag-none w-32 h-8 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_ebay.png"
        alt=""
        className="drag-none w-20 h-7 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_target.png"
        alt=""
        className="drag-none w-10 h-12 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
      <img
        src="https://www.cardeaze.com/img/icon_vanilla.png"
        alt=""
        className="drag-none w-28 h-8 opacity-50 select-none drag-none transition duration-300 hover:opacity-100"
      />
    </div>
  );
}
