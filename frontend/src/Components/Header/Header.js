import "./Header.css";
import { Link } from "react-router-dom";
import { BsHeartFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/userAction";
import { useHistory } from "react-router";
import { useState } from "react";
import { listProducts, searchProducts } from "../../actions/productAction";

const Header = () => {
  const authorizeUser = useSelector((state) => state.authorizeUser);
  const { user } = authorizeUser;
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search !== "") dispatch(searchProducts(search));
    else dispatch(listProducts());
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
    dispatch(logout());
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch(event);
    }
  }
  return (
    <div>
      <header className="header">
      <div>
          <Link to="/" className="header_logo">
            Stash<span className="color">Cart</span>
          </Link>
      </div>
      <div className="header_search">
        <input
          type="text"
          name="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={handleKeyPress}
        />
        <Link className="header_search-icon" to="/" onClick={handleSearch}>
          <BsSearch />
        </Link>
      </div>
      <ul className="header_navigation">
        <li className="header_navigation_item item1">
          {user ? (
            <Link className="header_navigation_item-link" to="/wishlist">
              <BsHeartFill />
            </Link>
          ) : null}
        </li>
        <li className="header_navigation_item item2">
          <Link className="header_navigation_item-link" to="/cart">
            <AiOutlineShoppingCart />
          </Link>
        </li>
        <li className="header_navigation_item item3">
          {user && user.name ? (
            <span className="username">
              {user.name.split(" ")[0]}
            </span>
          ) : (
            <Link className="header_navigation_item-link" to="/login">
              Login
            </Link>
          )}
        </li>

        {user && user != null ? (
          <li>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </header>
    </div>
  );
};

export default Header;
