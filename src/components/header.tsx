import "./header.scss";
import React, { FC, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  signedIn: boolean;
}

export const Header: FC<HeaderProps> = ({ signedIn }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = useCallback(
    (e) => {
      const isliOutside = !e.target.closest("li");
      const isaOutside = !e.target.closest("a");

      if ((isaOutside || isliOutside) && open) {
        setOpen(false);
      }
    },
    [open, setOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [open, handleClick]);

  return (
    <header>
      <nav>
        {signedIn ? (
          <>
            <h2>hello</h2>
            <div className="nav-bar">
              {/* 1 Link mit label und i -> css hiden bie MQ */}
              <Link to="/">
                <label>Menus</label>
                <i className="material-icons">menu</i>
              </Link>
              <Link className="link" to="/items">
                Food/Drinks
              </Link>
              <Link className="link-res" to="/items">
                <i className="material-icons">restaurant_menu</i>
              </Link>
              <Link className="link" to="/extras">
                Extras/Toppings
              </Link>
              <Link className="link-res" to="/extras">
                <i className="material-icons">note_add</i>
              </Link>
              <div className="myCircle ">
                <i className="material-icons circle">add_circle</i>
              </div>
            </div>
            <Link className="profil-link " to="/profile">
              Profile
              {/* Logout logic in Porfile page */}
              {/* <button onClick={() => signOut()}>logOut</button> */}
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};
