import React, { useEffect } from "react";
import ArtworkItem from "../ArtworkItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_ARTWORKS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ARTWORKS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";


function ArtworkList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_ARTWORKS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_ARTWORKS,
        artworks: data.artworks,
      });
      data.artworks.forEach((artwork) => {
        idbPromise("artworks", "put", artwork);
      });
    } else if (!loading) {
      idbPromise("artworks", "get").then((artworks) => {
        dispatch({
          type: UPDATE_ARTWORKS,
          artworks: artworks,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterArtworks() {
    if (!currentCategory) {
      return state.artworks;
    }

    return state.artworks.filter(
      (artwork) => artwork.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Artwork:</h2>
      {state.artworks.length ? (
        <div className="flex-row">
          {filterArtworks().map((artwork) => (
            <ArtworkItem
              key={artwork._id}
              _id={artwork._id}
              image={artwork.image}
              name={artwork.name}
              price={artwork.price}
              quantity={artwork.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any artworks yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ArtworkList;
