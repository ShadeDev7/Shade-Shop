import Image from "next/image";

const LoadingScreen = () => {
    return (
        <div className="absolute z-[1] flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-white">
            <p className="text-center text-5xl font-bold text-indigo-600 transition-colors duration-500 hover:text-indigo-700">
                ShadeShop
            </p>

            <Image alt="Cargando..." src="/imgs/spinner.svg" width="36px" height="36px" />
        </div>
    );
};

export default LoadingScreen;
