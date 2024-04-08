import logo from "../assets/logo.jpg";
import Button from "./ui/Button.jsx";
import { useContext } from "react";
import cartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
  const cartCtx = useContext(cartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalQuantity = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header" className="w-full">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalQuantity})
        </Button>
      </nav>
    </header>
  );
}
