export const sort = (mode: string, array: any[], key: string) => {
    switch (mode) {
        case "A-Z":
            return [...array].sort((a, b) => a[key].localeCompare(b[key]));

        case "Z-A":
            return [...array].sort((a, b) => b[key].localeCompare(a[key]));

        case "ASC":
            return [...array].sort((a, b) => a[key] - b[key]);

        case "DESC":
            return [...array].sort((a, b) => b[key] - a[key]);

        default:
            return array;
    }
};
