import { useState } from "react";

const useSlider = (length: number) => {
    const [current, setCurrent] = useState(0);

    const handleSlider = (position: "prev" | "next") => {
        if (position === "prev") {
            return setCurrent(current === 0 ? length - 1 : current - 1);
        }

        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    return { current, handleSlider };
};

export default useSlider;
