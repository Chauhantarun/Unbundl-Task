import { useEffect, useState } from "react";
import "./product.css";
import Header from "../Comp/Header2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search
  const [search, setSearch] = useState("");

  // Sorting
  const [sort, setSort] = useState("");

  // Accordion
  const [openCard, setOpenCard] = useState(null);

  // Tabs
  const [view, setView] = useState("grid");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError("Unable to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Reset page when search or sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, sort]);

  // Search filter
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  if (loading) {
    return <h1 className="loading">Loading Products...</h1>;
  }

  if (error) {
    return <h1 className="error">{error}</h1>;
  }

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      {/* Tabs */}
      <div className="tabs">
        <button
          className={view === "grid" ? "active-tab" : ""}
          onClick={() => setView("grid")}
        >
          Grid View
        </button>

        <button
          className={view === "list" ? "active-tab" : ""}
          onClick={() => setView("list")}
        >
          List View
        </button>
      </div>

      {/* Sorting */}
      <div className="filter-container">
        <button
          className={sort === "low" ? "active-filter" : ""}
          onClick={() => setSort("low")}
        >
          Price ↑
        </button>

        <button
          className={sort === "high" ? "active-filter" : ""}
          onClick={() => setSort("high")}
        >
          Price ↓
        </button>
      </div>

      {/* Products */}
      <div className={`products-container ${view}`}>
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="product-content">
              <h3>{product.title}</h3>

              <div className="rating">
                ⭐ <span>{product.rating}</span>
              </div>

              <p>
                {openCard === product.id
                  ? product.description
                  : product.description.slice(0, 70) + "..."}
              </p>

              {/* Accordion */}
              <button
                className="accordion-btn"
                onClick={() =>
                  setOpenCard(openCard === product.id ? null : product.id)
                }
              >
                {openCard === product.id ? "Show Less" : "Read More"}
              </button>

              <h2>${product.price}</h2>

              <button className="view-btn">
                View Product <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active-page" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Products;