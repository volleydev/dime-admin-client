import './header.scss'
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";




export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {

  function handlePlusBtn() {
console.log("hello");  }

  return (
    <header>
      <nav>
        {signedIn && (
          <>
          <h2>hello</h2>
          <div className="nav-bar">
            <Link className="link" to="/">Menus </Link> 
            <Link className="link-res" to="/"> <i className="material-icons">menu</i></Link> 
           
            <Link className="link" to="/items"> Food/Drinks</Link>
            <Link className="link-res" to="/items"> <i className="material-icons">restaurant_menu</i></Link>
            
            <Link className="link" to="/extras"> Extras/Toppings</Link>
            <Link className="link-res" to="/extras"> <i className="material-icons">note_add</i></Link>
           
           <div className="myCircle ">
           <i className="material-icons circle" onClick={handlePlusBtn}>add_circle</i>
           </div>
            </div>
            
            <Link className="profil-link " to="/profile">
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
