import { useContext } from "react";
import { ContextApi } from "../../context/favoriteContext";

function Favorite({ favIcon, setFavIcon }) {
  const { products } = useContext(ContextApi);

 
  const handleFavoriteClick = (product) => {
    console.log(product)
    const updatedFav = favIcon.filter((fav) => fav.id !== product.id);
    // console.log(updatedFav)
    setFavIcon([...updatedFav])
    console.log(favIcon, "favicon")
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
        gap: "10px",
      }}
    >
      {favIcon.map((product, index) => (
        
        <div
          key={index}
          className="product-slide"
          style={{ border: "1px solid gray" }}
        >
          <img
            src={product.image}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <i
            className="fa-regular fa-heart"
            onClick={() => handleFavoriteClick(product)}
            style={{
              color: favIcon.includes(product) ? "red" : "black",
              cursor: "pointer",
              fontSize: "26px",
            }}
          ></i>
        </div>
      ))}
    </div>
  );
}

export default Favorite;
