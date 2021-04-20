import './header.scss'
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { forEachChild } from 'typescript';
// import { ItemsPage } from '../pages/items';


export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {

  const [width, setWidth] = useState(0)

useEffect(()=>{
  const updateWidth= () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth)
  }
  window.addEventListener("resize", updateWidth);
  return () => window.removeEventListener("resize", updateWidth) 

}, [window.innerWidth])

console.log(width);

if(width <= 600){
  // @ts-ignore
  let linkText:any = document.getElementsByClassName("link") as HTMLInputElement
  
  for(let i in linkText){
    if(typeof linkText[i].innerHTML === 'string'){
      linkText[i].innerHTML =  linkText[i].innerHTML
      .replace('Menus','')
      .replace('Food/Drinks','')
      .replace('Extras/Toppings','')
    }
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
