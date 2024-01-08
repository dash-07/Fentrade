import PropTypes from "prop-types";

export default function Backdrop({ setShowMenu }) {
  return (
    <div
      className="absolute top-0 left-0 bg-[rgba(0,0,0,.5)] z-50 w-screen h-screen md:hidden"
      onClick={() => setShowMenu(false)}
    ></div>
  );
}

Backdrop.propTypes = {
  //   icon: PropTypes.string.isRequired,
  //   title: PropTypes.string.isRequired,
  //   rates: PropTypes.array.isRequired,
  setShowMenu: PropTypes.func,
};
