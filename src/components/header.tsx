import './header.scss'
import { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {
  return (
    <header>
      <nav>
        {signedIn && (
          <>
          <h2>hello</h2>
          <div className="nav-bar">
            <Link to="/">Menus</Link>
            <Link to="/items">Food/Drinks</Link>
            <Link to="/extras">Extras/Toppings</Link>
            </div>
            
            <Link className="profil-link" to="/profile">
             <i className="material-icons">person</i>
            </Link>
          
          </>
        )}
      </nav>
      {signedIn ? (
        <>
        </>
      ) : (
        <>
          <Link to="/auth/login">Login</Link>
        </>
      )}
    </header>
  );
};
