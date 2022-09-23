import Menu from "./Menu/Menu";

const Layout = ({ categories, children }: LayoutProps) => {
    return (
        <div className="flex h-full flex-col md:flex-row">
            <div className="scrollbar flex flex-1 flex-col items-center bg-neutral-200 [overflow-y:overlay] md:order-2">
                {children}
            </div>

            <Menu categories={categories} />
        </div>
    );
};

export default Layout;
