import { useContext } from "react";

import AppContext from "context/AppContext";
import LoadingScreen from "components/LoadingScreen";
import Menu from "./Menu/Menu";

const Layout = ({ children }: LayoutProps) => {
    const { isLoading } = useContext(AppContext);

    return (
        <>
            {isLoading && <LoadingScreen />}

            <div className="flex h-full flex-col md:flex-row">
                <div className="scrollbar flex flex-1 flex-col items-center bg-neutral-200 [overflow-y:overlay] md:order-2">
                    {children}
                </div>

                <Menu />
            </div>
        </>
    );
};

export default Layout;
