import PropTypes from "prop-types";
import { useState } from "react";
import { cn } from "../utils/cn";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="px-4 py-2 my-4 bg-[#F3F4F5] rounded-lg">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={toggle}
      >
        <p>{title}</p>
        <span
          className={cn(
            "text-[2rem] transition-transform duration-500",
            isActive ? "rotate-[135deg]" : "rotate-0"
          )}
          onClick={toggle}
        >
          +
        </span>
      </div>
      <div
        className={cn(
          "overflow-hidden transition-all duration-700 ease-in",
          //Toggle Accordion
          isActive ? "max-h-screen" : "max-h-0"
        )}
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
