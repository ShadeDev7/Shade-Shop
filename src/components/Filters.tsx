import { useContext, useState, useEffect } from "react";

import AppContext from "context/AppContext";
import { sort } from "helpers";

const Filters = () => {
    const { products, setProducts } = useContext(AppContext);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (!filter) return;

        const key = ["ASC", "DESC"].includes(filter) ? "price" : "name";

        setProducts(sort(filter, products, key));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    return (
        <select
            onChange={e => setFilter(e.target.value)}
            className="rounded-full border-r-8 border-transparent p-3 pl-2 text-sm"
        >
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            <option value="ASC">Precio Ascendente</option>
            <option value="DESC">Precio Descendente</option>
        </select>
    );
};

export default Filters;
