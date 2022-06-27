import "./Details.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "./../../actions/productAction";
import Spinner from "../../Components/spinner/spinner";
import { BsHeartFill } from "react-icons/bs";
import {
  addProductToWishlist,
  addProductToCart,
} from "./../../actions/userAction";

const Details = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const productDetails = useSelector((state) => state.productDetails);
  const { user } = useSelector((state) => state.authorizeUser);
  const { error } = useSelector((state) => state.addProductToWishList);
  const addItemToCart = useSelector((state) => state.addProductToCart);
  const errorCart = addItemToCart ? addItemToCart.error : null;
  const { product, loading } = productDetails;

  const addToWishlist = (e) => {
    e.preventDefault();
    if (!user) {
      setMessage("Login to add product in wishlist.");
      setTimeout(function () {
        setMessage("");
      }, 3000);
      return;
    }
    dispatch(addProductToWishlist(user._id, id));
    if (!error) {
      setMessage("Product is added wishlist.");
      setTimeout(function () {
        setMessage("");
      }, 3000);
    }
  };

  const addToCart = (e) => {
    e.preventDefault();
    if (!user) {
      setMessage("Login to add product in cart.");
      setTimeout(function () {
        setMessage("");
      }, 3000);
      return;
    }
    setMessage("Product added to cart.");

    dispatch(addProductToCart(user._id, id));
    setTimeout(function () {
      setMessage("");
    }, 3000);
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (!loading && product && Object.keys(product).length !== 0) {
    return product ? (
      <div className="details">
        <div>
          <Link to="/" className="btn">
            Back
          </Link>
        </div>
        <div className="details_main">
          <div className="details_image">
            <img
              src={require(`./../../../public${product.image}`).default}
              alt={product.name}
            />
          </div>
          <div className="details_content">
            <div className="details_content-info">
              <h1>{product.name}</h1>
              <div className="details_content-info-rating">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>{product.numReviews} Reviews</p>
              </div>
              <hr />
              <p className="details_content-info-price">
                <b>Price:</b> ₹{product.price}
              </p>
              <hr />
              <p className="details_content-info-description">
                <b>Description:</b> {product.description}.
              </p>
              <hr />
              <br />
              <button className="btn" onClick={addToWishlist}>
                <BsHeartFill />
              </button>

              {error ? (
                <div className="details_content-info-added">{error}</div>
              ) : message ? (
                <div className="details_content-info-added">{message}</div>
              ) : (
                ""
              )}
              {/* {message && !error ? (
                <div className="details_content-info-added">{message}</div>
              ) : (
                ""
              )} */}
              {errorCart ? (
                <div className="details_content-info-added">{errorCart}</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="details_content">
              <table>
                  <tr>
                    <td>
                      <b>Price: </b>
                    </td>
                    <td>{product.price}</td>
                  </tr>
                  <tr>
                    <td><b>Status:</b></td>
                    <td>In Stock</td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="quantity">
                       <b>Quantity:</b>
                      </label>
                    </td>
                    <td>
                      <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="5"
                      defaultValue={1}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} >
                      <button className="btn" onClick={addToCart} style={{width:"100%"}}>
                      Add to cart
                     </button>
                    </td>
                  </tr>
              </table>
            </div>
        </div>
      </div>
    ) : null;
  } else {
    return <Spinner />;
  }
};

export default Details;
