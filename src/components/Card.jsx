import { cn } from "../utils/cn";
import PropTypes from "prop-types";

export default function Card({ img, title, text }) {
  return (
    <div
      className={cn(
        //Base styles
        "bg-white flex items-center gap-4 shadow-lg p-4 text-left rounded-lg",
        //Large screens
        "md:relative md:p-20 md:gap-0 md:flex-col md:items-center md:justify-center md:text-center"
      )}
    >
      <img
        src={img}
        alt=""
        className="w-[100px] h-[100px] md:w-[unset] md:h-[unset] md:absolute md:-top-10"
      />
      <div className="md:mt-24">
        <b className="text-xl md:text-2xl">{title}</b>
        <p className="my-5 text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
