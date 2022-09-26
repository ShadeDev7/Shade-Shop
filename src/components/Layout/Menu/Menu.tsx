import { useContext } from "react";
import Link from "next/link";

import AppContext from "context/AppContext";
import MenuAnchor from "./MenuAnchor";
import CategoriesButton from "./CategoriesButton";
import Categories from "./Categories";
import ThemeButton from "./ThemeButton";
import { menuAnchors } from "data/layout";

const Menu = () => {
    const { showCategories } = useContext(AppContext);

    return (
        <>
            <div className="md:scrollbar flex items-center justify-around border-t-2 border-neutral-200 bg-gray-100 p-2 md:order-1 md:w-1/3 md:flex-col md:justify-start md:gap-2 md:py-8 md:px-0 md:[overflow-y:overlay] lg:w-1/4 xl:w-[22.5%] 2xl:w-[17.5%]">
                <MenuAnchor href="#" className="md:order-2" {...menuAnchors.profile}>
                    Perfil
                </MenuAnchor>

                <MenuAnchor href="#" className="md:order-3" {...menuAnchors.cart}>
                    Carrito
                </MenuAnchor>

                <Link href="/">
                    <a className="text-lg font-bold text-indigo-600 transition-colors duration-500 hover:text-indigo-700 md:order-1 md:text-xl">
                        Shade Shop
                    </a>
                </Link>

                <div className="md:hidden">
                    <CategoriesButton />
                </div>

                <ThemeButton />

                <div className="hidden md:order-4 md:flex md:flex-col md:items-center md:pb-2">
                    <h2 className="text-lg font-bold text-indigo-600">Categorías</h2>

                    <Categories />
                </div>

                <div className="hidden md:order-5 md:flex md:flex-col md:gap-2">
                    <h2 className="text-lg font-bold text-indigo-600">Sobre Nosotros</h2>

                    <MenuAnchor href="#" {...menuAnchors.faq}>
                        Dudas
                    </MenuAnchor>

                    <MenuAnchor href="#" {...menuAnchors.terms}>
                        Términos
                    </MenuAnchor>

                    <MenuAnchor href="#" {...menuAnchors.contact}>
                        Contacto
                    </MenuAnchor>
                </div>
            </div>

            {showCategories && <Categories />}
        </>
    );
};

export default Menu;
