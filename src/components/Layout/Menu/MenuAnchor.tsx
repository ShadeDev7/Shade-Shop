import Link from "next/link";

const MenuAnchor = ({ href, className = "", viewBox, paths, children }: MenuAnchorProps) => {
    return (
        <Link href={href}>
            <a
                className={`grid h-10 w-10 place-items-center content-center rounded-full transition-colors duration-500 hover:bg-white md:w-32 md:grid-cols-[1fr,2fr] md:p-3 [&>svg>g]:hover:fill-indigo-600 md:[&>p]:hover:text-indigo-600 ${className}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} className="h-5 w-5">
                    <g className="fill-gray-600 [&>path]:transition-colors [&>path]:duration-500">
                        {paths.map((path, pathIndex) => (
                            <path key={pathIndex} d={path} />
                        ))}
                    </g>
                </svg>

                <p className="hidden md:block md:text-sm md:text-gray-600 md:transition-colors md:duration-500">
                    {children}
                </p>
            </a>
        </Link>
    );
};

export default MenuAnchor;
