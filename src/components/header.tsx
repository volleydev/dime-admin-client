import { FC } from "react";
import { Link } from "react-router-dom";
import { signOut, User } from "../services/auth";

export const Header: FC<{ user?: User }> = ({ user }) => {
  return (
    <header>
      <nav>
        {user && (
          <>
            <Link to="/">Menus</Link>
            <Link to="/items">Food/Drinks</Link>
            <Link to="/extras">Extras/Toppings</Link>
          </>
        )}
      </nav>
      {user ? (
        <>
          <button onClick={signOut}>Logout</button>
          <Link to="/profile">
            <i className="material-icons">person</i>
          </Link>
        </>
      ) : (
        <Link to="/auth/login">Login</Link>
      )}
    </header>
  );
};
