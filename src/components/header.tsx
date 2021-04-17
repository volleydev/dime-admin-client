import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {
  return (
    <header>
      <nav>
        {signedIn && (
          <>
            <Link to="/">Menus</Link>
            <Link to="/items">Food/Drinks</Link>
            <Link to="/extras">Extras/Toppings</Link>
          </>
        )}
      </nav>
      {signedIn ? (
        <>
          <Link to="/profile">
            <i className="material-icons">person</i>
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth/login">Login</Link>
        </>
      )}
    </header>
  );
};
