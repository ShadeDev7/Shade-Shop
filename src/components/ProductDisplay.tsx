import { useContext, MouseEvent } from "react";
import { useRouter } from "next/router";

import AppContext from "context/AppContext";
import ImageSlider from "./ImageSlider";
import { toCurrency } from "helpers";

const ProductDisplay = ({ product }: ProductDisplayProps) => {
    const { categories, setCategory } = useContext(AppContext);
    const router = useRouter();

    const { _id, name, description, categoryId, price, stock, images } = product;
    const category = categories.find(category => category._id === categoryId);

    const handleClipboard = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;

        navigator?.clipboard?.writeText(_id);
        target.textContent = "¡Copiado al portapapeles!";
        target.disabled = true;

        setTimeout(() => {
            target.textContent = _id;
            target.disabled = false;
        }, 1500);
    };

    const handleCategory = () => {
        if (!category) return;

        setCategory(category);
        router.push("/");
    };

    return (
        <main className="2xl: mx-auto flex w-[90%] max-w-[475px] flex-col items-center gap-3 rounded-sm border-[1px] border-neutral-300 p-6 transition-colors duration-500 hover:border-indigo-500 sm:w-auto xl:w-[92.5%] xl:max-w-[68rem] xl:flex-row xl:gap-8 xl:p-8">
            <div className="relative aspect-square w-full shadow-lg xl:flex-1">
                <ImageSlider alt={name} images={images} />
            </div>

            <div className="flex flex-col gap-7 xl:flex-1 xl:gap-10">
                <div>
                    <h1 className="text-shadow text-center text-2xl font-bold [line-height:1] md:text-3xl xl:text-4xl">
                        {name}
                    </h1>

                    <p className="-mt-0.5 text-center text-lg">{toCurrency(price)}</p>
                </div>

                <p
                    className={`-mt-0.5 text-center text-lg ${
                        stock ? "text-green-800" : "text-red-700"
                    }`}
                >
                    {stock ? "Stock disponible" : "Sin stock"}
                </p>

                <div className="flex flex-col gap-2 text-neutral-700">
                    <div>
                        <p>
                            Código:&nbsp;
                            <button
                                className="text-indigo-600 transition-colors duration-500 hover:text-indigo-700 hover:underline"
                                onClick={handleClipboard}
                            >
                                {_id}
                            </button>
                        </p>

                        {category && (
                            <p>
                                Categoría:&nbsp;
                                <button
                                    className="text-indigo-600 transition-colors duration-500 hover:text-indigo-700 hover:underline"
                                    onClick={handleCategory}
                                >
                                    {category.name}
                                </button>
                            </p>
                        )}
                    </div>

                    <p>{description}</p>
                </div>

                <button
                    className="rounded-sm bg-indigo-600 py-2.5 text-white transition-colors duration-500 hover:bg-indigo-700"
                    onClick={() => {}}
                >
                    Añadir al carrito
                </button>
            </div>
        </main>
    );
};

export default ProductDisplay;
