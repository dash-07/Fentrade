import PropTypes from "prop-types";

export default function Service({ icon, title, rates }) {
  return (
    <div className="text-white w-full">
      <div className="p-2 flex items-center gap-2 w-full bg-[rgba(0,0,0,.15)]">
        <img
          src={icon}
          alt="icon"
          className="w-[26px] h-[26px] rounded-full object-cover"
        />
        <span>{title}</span>
      </div>
      <ul>
        {rates.map((rate, index) => (
          <li key={index} className="p-2 flex items-center justify-between">
            <span>{rate.split(",")[0]}</span>
            <span>{rate.split(",")[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rates: PropTypes.array.isRequired,
};
