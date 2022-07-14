import { useDispatch, useSelector } from "react-redux";
import { FavoriteItem } from "../favoriteItem/FavoriteItem";
import "./Favourite.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

export const Favorite = ({ setShowFavourite }) => {
  const favorite = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const emptyFavourites = () => {
    dispatch({
      type: "EMPTY_FAVOURITES",
    });
  };

  return (
    <div className="favourite">
      <div className="favourite-container">
        <div className="fav-header">
          {favorite && favorite.length > 0 && (
            <h2 id="fav-heading">
              You have {favorite.length} Favourite Dishes{" "}
              <FaTrash id="empty-all-bt" onClick={emptyFavourites} />
            </h2>
          )}
          <AiOutlineClose
            onClick={() => setShowFavourite(false)}
            id="fav-close-bt"
          />
        </div>
        {favorite && favorite.length > 0 ? (
          <div className="favourate-items">
            {favorite &&
              favorite.map((item) => (
                <FavoriteItem key={item.id} data={item} />
              ))}
          </div>
        ) : (
          <div className="empty-fav">
            <h1 id="empty-fav-text">
              Your <span>Favourites</span> section is empty, start adding some
              delicious dishes here....
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
