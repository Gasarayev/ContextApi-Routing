import React, { useContext } from "react";
import { ContextApi } from "../../context/favoriteContext";

function Card({ favIcon, setFavIcon }) {
  const { products } = useContext(ContextApi);

  const handleFavoriteClick = (product) => {
    if (favIcon.includes(product)) {
      setFavIcon(favIcon.filter((favProduct) => favProduct !== product));
    } else {
      setFavIcon([...favIcon, product]);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px", gap: "10px" }}>
      {products.map((product, index) => (
        <div key={index} className="product-slide" style={{ border: "1px solid gray" }}>
          <img src={product.image} alt="" style={{ width: "200px", height: "200px" }} />
          <i
            className="fa-regular fa-heart"
            onClick={() => handleFavoriteClick(product)}
            style={{ color: favIcon.includes(product) ? "red" : "black" }}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Card;
