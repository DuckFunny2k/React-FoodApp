import logo from "../assets/logo.jpg";
import Button from "./ui/Button.jsx";

export default function Header() {
  return (
    <header id="main-header" className="w-full">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
