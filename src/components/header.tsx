import "./header.scss";
import React, { FC, useState, useEffect, useCallback } from "react";
import Modal from './modal'
import { Link } from "react-router-dom";

interface HeaderProps {
  signedIn: boolean;
}

export const Header: FC<HeaderProps> = ({ signedIn }) => {


 

  const [show, setshow] = useState<boolean>(false);
  


  const handleClick = (e) =>  {
    //@ts-ignore
     const isOutside = e.target.closest(".modal-container");
     console.log(isOutside);
     if (isOutside && show) {
       setshow(true);
     }
     if(isOutside === null && show){
       setshow(false)
     }
     
  }

    useEffect(()=> {
        document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      }
    },[show])

  return (
    <header>
      <nav>
        {signedIn ? (
          <>
            <h2>hello</h2>
            <div className="nav-bar">
              <Link to="/menus">
                <label>Menus</label>
                <i className="material-icons">menu</i>
              </Link>

              <Link to="/items">
              <i className="material-icons">restaurant_menu</i>
              <label>Food/Drinks</label>
              </Link>

              <Link to="/extras">
              <i className="material-icons">note_add</i>
              <label>Extras/Toppings</label>        
              </Link>
              <Link className="profil-link" to="/profile">
              <i className="material-icons">person</i>
              <label>Profile</label>       
                {/* Logout logic in Porfile page */}
                {/* <button onClick={() => signOut()}>logOut</button> */}
              </Link>
              
              <div className="myCircle ">
                <i className="material-icons circle" onClick={() => setshow(!show)}>add_circle</i>
              </div>
            </div>
          
         
        
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
          </>
        )}
      </nav>

    {show?  <Modal/>  : ""}
    </header>
    
  );
};
