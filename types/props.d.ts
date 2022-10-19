type LayoutProps = {
    children: ReactNode;
};

type MenuAnchorProps = {
    href: string;
    className?: string;
    viewBox: string;
    paths: string[];
    children: ReactNode;
};

type AppProviderProps = {
    children: ReactNode;
};

type ProductProps = {
    product: Product;
};

type ProductDisplayProps = {
    product: Product;
};

type ImageSliderProps = {
    alt: string;
    images: string[];
};
