import Image from "next/image";

import { useSlider } from "hooks";

const ImageSlider = ({ alt, images }: ImageSliderProps) => {
    const { current, handleSlider } = useSlider(images.length);

    return (
        <>
            {images.map((image, i) => (
                <div
                    key={i}
                    className={`absolute h-full w-full transition-opacity duration-300 ${
                        current !== i ? "opacity-0" : ""
                    }`}
                >
                    <Image alt={alt} src={image} layout="fill" quality={100} priority />
                </div>
            ))}

            {images.length > 1 && (
                <div className="absolute flex h-full w-full items-center justify-between">
                    <button
                        aria-label="Anterior Imagen"
                        className="arrow-button"
                        onClick={() => handleSlider("prev")}
                    >
                        <Image
                            alt="Anterior Imagen"
                            src="/imgs/arrow.svg"
                            layout="fill"
                            className="arrow-button rotate-90"
                        />
                    </button>

                    <button
                        aria-label="Siguiente Imagen"
                        className="arrow-button"
                        onClick={() => handleSlider("next")}
                    >
                        <Image
                            alt="Siguiente Imagen"
                            src="/imgs/arrow.svg"
                            layout="fill"
                            className="arrow-button -rotate-90"
                        />
                    </button>
                </div>
            )}
        </>
    );
};

export default ImageSlider;
