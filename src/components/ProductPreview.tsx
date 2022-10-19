import Image from "next/image";
import Link from "next/link";

import { toCurrency } from "helpers";

const Product = ({ product }: ProductProps) => {
    const { _id, name, price, images } = product;

    return (
        <div className="flex w-80 flex-col transition-transform duration-500 hover:scale-105">
            <Link href={`/product/${_id}`}>
                <a className="relative h-80 shadow-lg">
                    <Image
                        alt={name}
                        src={images[0]}
                        layout="fill"
                        objectFit="contain"
                        quality={100}
                        priority
                    />
                </a>
            </Link>

            <div className="flex flex-col items-center py-3">
                <p className="text-center text-xl font-semibold [line-height:1]">{name}</p>

                <span className="-mt-0.5 text-center">{toCurrency(price)}</span>
            </div>

            <Link href={`/product/${_id}`}>
                <a className="-mt-1 rounded-sm bg-indigo-600 py-2 text-center text-white transition-colors duration-500 hover:bg-indigo-700">
                    Visitar
                </a>
            </Link>
        </div>
    );
};

export default Product;
