import { useContext } from "react";
import { ContextApi } from "../../context/favoriteContext";


function Favorite({ favIcon, setFavIcon }) {
    const {products} = useContext(ContextApi);

    const removeFavoritePage = (product) =>{
        if(favIcon.includes(product)){
            setFavIcon(favIcon.filter(fav => fav.id !== product.id));
        }
    }
    const handleFavoriteClick = (product) => {
        if (favIcon.includes(product)) {
          removeFavoritePage(product);
        } else {
          setFavIcon([...favIcon, product]);
        }
      };
      return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px", gap: "10px" }}>
          {favIcon.map((product, index) => (
            <div key={index} className="product-slide" style={{ border: "1px solid gray" }}>
              <img src={product.image} alt="" style={{ width: "200px", height: "200px" }} />
              <i
                className="fa-regular fa-heart"
                onClick={() => handleFavoriteClick(product)}
                style={{ color: favIcon.includes(product) ? "red" : "black", cursor: "pointer", fontSize: "26px" }}
              ></i>
            </div>
          ))}
        </div>
      );
}

export default Favorite;
