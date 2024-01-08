import { useRef, useEffect } from "react";

export default function useSlider(id) {
  const dragging = useRef(false);

  useEffect(() => {
    const slideWrapper = document.getElementById(id);
    if (!slideWrapper) return;

    const onPointerDown = () => {
      dragging.current = true;
    };

    const onPointerUp = () => {
      dragging.current = false;
    };

    const onPointerMove = (e) => {
      if (dragging.current === false) return;
      slideWrapper.scrollLeft -= e.movementX;
    };

    slideWrapper.addEventListener("pointerdown", onPointerDown);
    slideWrapper.addEventListener("pointerup", onPointerUp);
    slideWrapper.addEventListener("pointermove", onPointerMove);
    slideWrapper.addEventListener("pointerleave", onPointerUp);

    const cleanup = () => {
      slideWrapper.removeEventListener("pointerdown", onPointerDown);
      slideWrapper.removeEventListener("pointerup", onPointerUp);
      slideWrapper.removeEventListener("pointermove", onPointerMove);
      slideWrapper.removeEventListener("pointerleave", onPointerUp);
    };
    return cleanup;
  }, [id]);
}
