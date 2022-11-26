import "./CartWidget.css"
import {FaShoppingCart} from "react-icons/fa"

export const CartWidget = () => {
  return (
    <div className="container-cart">
    <a href=""><FaShoppingCart 
    style={{
      fontSize: "2rem",
      color: "#211617",
    }}
    /></a>
    </div>
  )
}
