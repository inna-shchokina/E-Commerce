import { Link } from "react-router-dom";

function Header({ itemsNumber }) {
  return (
    <header className="py-2 px-10 bg-white flex justify-between text-slate-800 items-center shadow-sm">
      <Link to="/" className="logo font-bold">
        E-commerce
      </Link>
      <nav>
        <ul className="menu menu-horizontal  text-slate-800 items-center">
          <li className="hover:border-b-2 hover:border-cyan-900">
            <Link to="/" className="menuLink uppercase">
              Home
            </Link>
          </li>
          <li className="hover:border-b-2 hover:border-cyan-900">
            <Link to="/cart" className="menuLink">
              <img
                className="w-[28px]"
                src="/icons/icons8-cart-50.png"
                alt="cart icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
