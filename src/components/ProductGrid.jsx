import ProductCard from "./ProductCard";

function ProductGrid({ products, onAddToCart }) {

    if (products.length === 0) {
        return (
            <div className="text-center py-16">

                <div className="text-5xl mb-4">
                    🔍
                </div>

                <h3 className="text-xl font-semibold mb-2">
                    No products found
                </h3>

                <p className="text-gray-500">
                    Try changing your search or filter.
                </p>

            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}

        </div>
    );
}

export default ProductGrid;