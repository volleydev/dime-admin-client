import './header.scss'
import { FC } from "react";
import { Link } from "react-router-dom";
import { ItemsPage } from '../pages/items';
import { forEachChild } from 'typescript';

export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {
  if(window.innerWidth <= 600){
    const linkText = document.getElementsByClassName("link")
    
    for(let i in linkText){
       console.log(linkText[i])
    }
  }
  return (
    <header>
      <nav>
        {signedIn && (
          <>
          <h2>hello</h2>
          <div className="nav-bar">
            <Link className="link" to="/">Menus <i className="material-icons icons">menu</i></Link> 
           
            <Link className="link" to="/items"> <i className="material-icons icons">restaurant_menu</i>Food/Drinks</Link>
            
            <Link className="link" to="/extras"> <i className="material-icons icons">note_add</i>Extras/Toppings</Link>
           
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
