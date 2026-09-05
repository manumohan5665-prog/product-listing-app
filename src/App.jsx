import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";

import productsData from "./data/product";

function App() {

  const [products] = useState(productsData);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sort, setSort] = useState("default");

  const [cart, setCart] = useState([]);


  // Add product to cart
  const handleAddToCart = (product) => {

    setCart((previousCart) => [
      ...previousCart,
      product
    ]);

    console.log(`${product.name} added to cart`);
  };


  // Get unique categories
  const categories = [
    ...new Set(
      products.map((product) => product.category)
    )
  ];


  // Search + Filter
  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });


  // Sorting
  if (sort === "price-low") {

    filteredProducts.sort(
      (a, b) => a.price - b.price
    );

  } else if (sort === "price-high") {

    filteredProducts.sort(
      (a, b) => b.price - a.price
    );

  } else if (sort === "rating-high") {

    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );

  } else if (sort === "rating-low") {

    filteredProducts.sort(
      (a, b) => a.rating - b.rating
    );
  }


  return (
    <>

      <Navbar cartCount={cart.length} />

      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-10">

        {/* Filters */}
        <section className="bg-white rounded-xl shadow-sm p-5 mb-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Search */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Search Products
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {/* Category */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="all">
                  All Categories
                </option>

                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}

              </select>

            </div>


            {/* Sort */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Sort By
              </label>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="default">
                  Default
                </option>

                <option value="price-low">
                  Price: Low to High
                </option>

                <option value="price-high">
                  Price: High to Low
                </option>

                <option value="rating-high">
                  Rating: High to Low
                </option>

                <option value="rating-low">
                  Rating: Low to High
                </option>

              </select>

            </div>

          </div>

        </section>


        {/* Products Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Products
          </h2>

          <span className="text-gray-500">
            {filteredProducts.length} products
          </span>

        </div>


        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts}
          onAddToCart={handleAddToCart}
        />

      </main>

    </>
  );
}

export default App;