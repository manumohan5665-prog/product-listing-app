function ProductCard({ product, onAddToCart }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">

                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                </h3>

                <div className="flex justify-between items-center mb-4">

                    <span className="text-xl font-bold">
                        ₹{product.price}
                    </span>

                    <span className="text-yellow-500">
                        ⭐ {product.rating}
                    </span>

                </div>

                <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                    Add to Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;