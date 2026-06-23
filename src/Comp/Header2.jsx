import "./header2.css";

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <div className="logo">
        Shop<span>Hub</span>
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Categories</a>
        <a href="/">Deals</a>
      </nav>

      <div className="header-right">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="cart-btn-header">
          🛒 Cart
        </button>
      </div>
    </header>
  );
};

export default Header;