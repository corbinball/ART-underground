import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Cart from "../components/Cart";
import { useStoreContext } from "../utils/GlobalState";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_ARTWORKS,
} from "../utils/actions";
import { QUERY_ARTWORKS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentArtwork, setCurrentArtwork] = useState({});

  const { loading, data } = useQuery(QUERY_ARTWORKS);

  const { artworks, cart } = state;

  useEffect(() => {
    // already in global store
    if (artworks.length) {
      setCurrentArtwork(artworks.find((artwork) => artwork._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_ARTWORKS,
        artworks: data.artworks,
      });

      data.artworks.forEach((artwork) => {
        idbPromise("artworks", "put", artwork);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("artworks", "get").then((indexedArtworks) => {
        dispatch({
          type: UPDATE_ARTWORKS,
          artworks: indexedArtworks,
        });
      });
    }
  }, [artworks, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        artwork: { ...currentArtwork, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...currentArtwork, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentArtwork._id,
    });

    idbPromise("cart", "delete", { ...currentArtwork });
  };

  return (
    <>
      {currentArtwork && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Art</Link>

          <h2>{currentArtwork.name}</h2>

          <p>{currentArtwork.description}</p>

          <p>
            <strong>Price:</strong>${currentArtwork.price}{" "}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentArtwork._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentArtwork.image}`}
            alt={currentArtwork.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;
