import React, { useContext } from "react";
import { ContextApi } from "../../context/favoriteContext";
import { Card } from "antd";
const { Meta } = Card;

function MyCard({ favIcon, setFavIcon }) {
  const { products } = useContext(ContextApi);

  const handleFavoriteClick = (product) => {
    if (favIcon.includes(product)) {
      setFavIcon(favIcon.filter((favProduct) => favProduct !== product));
    } else {
      setFavIcon([...favIcon, product]);
    }
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
      {products.map((product, index) => (

        
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={product.image} style={{height:"300px", padding:"30px", objectFit:"contain", position:"relative"}}/>}
        >
          <i
            className="fa-regular fa-heart" 
            onClick={() => handleFavoriteClick(product)}
            style={{ color: favIcon.includes(product) ? "red" : "black" , cursor:"pointer", fontSize:"26px", position:"absolute", top:"10px", right:"10px"}}
          ></i>
          <div>
            {product.price}
          </div>
          <Meta title={product.title} description={`${product.description.slice(1, 100)}...`} />
        </Card>
      ))}
    </div>
  );
}

export default MyCard;




