import './header.scss'
import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemsPage } from '../pages/items';

export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {
  if(window.innerWidth <= 600){
    console.log(
      
     document.getElementsByClassName('link')
    );
  }
  return (
    <header>
      <nav>
        {signedIn && (
          <>
          <h2>hello</h2>
          <div className="nav-bar">
            <Link to="/">Menus</Link> 
            <i className="material-icons icons">menu</i>
            <Link to="/items">Food/Drinks</Link>
            <i className="material-icons icons">restaurant_menu</i>
            <Link to="/extras">Extras/Toppings</Link>
            <i className="material-icons icons">note_add</i>
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
