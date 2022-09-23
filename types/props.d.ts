/// <reference types="react" />

type IndexProps = {
    categories: Category[];
};

type LayoutProps = {
    categories: Category[];
    children: React.ReactNode;
};

type MenuProps = {
    categories: Category[];
};

type MenuAnchorProps = {
    href: string;
    className?: string;
    viewBox: string;
    paths: string[];
    children: ReactNode;
};

type CategoriesProps = {
    categories: Category[];
    showCategories: boolean;
    setShowCategories: (newValue: boolean) => void;
};
