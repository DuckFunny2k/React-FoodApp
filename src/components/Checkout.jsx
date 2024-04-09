import Modal from "./ui/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { useContext } from "react";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currentFormatter } from "../util/Formatting.jsx";
import Input from "./ui/Input.jsx";
import Button from "./ui/Button.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalQuantity = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currentFormatter.format(totalQuantity)} </p>
        <Input label="Full name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button onClick={handleClose} type="button" textOnly>
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
