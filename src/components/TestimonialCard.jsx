import PropTypes from "prop-types";

export default function TestimonialCard({ message, img, name }) {
  return (
    <div className="bg-white p-7 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
      <img
        src="https://www.cardeaze.com/img/icon_comma.png"
        alt=""
        className="w-10 my-4"
      />
      <p className="my-3">{message}</p>
      <div className="flex items-center gap-4">
        <img src={img} alt="" className="w-[50px] h-[50px] rounded-full" />
        <span className="font-bold">{name}</span>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  message: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
