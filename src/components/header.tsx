import './header.scss'
import { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";



export const Header: FC<{ signedIn?: boolean }> = ({ signedIn }) => {

  const [open, setOpen] = useState(false);
  
  const onClick = () => setOpen(!open);
  
  const handleClick = (e) => {
    const isliOutside = !e.target.closest("li");
    const isaOutside = !e.target.closest("a");
    
    if ((isaOutside|| isliOutside) && open) {
    setOpen(false);  
  };

  useEffect(() => {
    
    document.addEventListener("click", handleClick);
    
    return () => {
    
      document.removeEventListener("click", handleClick);
    
    };
  }, [open]);

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
           <i className="material-icons circle">add_circle</i>
           
           </div>
            </div>
            
            
            <Link   className="profil-link " to="/profile">
             <i onClick={onClick} className="material-icons">person</i>
            </Link>

            <div  
             className={`menu ${open ? "active" : "inactive"}`}
            >
                   <li><a className="log" >logOut</a></li> 
                   {/* href="/auth/login" */}
            </div>
          
          </>
        )}
      </nav>
        {/* @jp3492 den Part musst du mir Bitte nchmal erklären */}
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
