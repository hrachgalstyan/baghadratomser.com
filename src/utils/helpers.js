export default function paginate(products) {
    const itemsPerPage = 4;
    const numberOfPages = Math.ceil(products.length / itemsPerPage);
    // const newProducts = Array.from({ length: numberOfPages}, () => {
    //     return this.state.product.splice(0, itemsPerPage);
    // });
    const newProducts = Array.from({ length: numberOfPages}, (_, index) => {
        const start = index * itemsPerPage;
        return products.slice(start, start + itemsPerPage);
    });
    return newProducts;
}