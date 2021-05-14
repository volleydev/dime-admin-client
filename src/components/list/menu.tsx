import { Link } from "react-router-dom";
import "./menu.scss";
import { MenuProps } from "../../stores/menu";

export const Menu = ({ name, description, id }: MenuProps) => {
  return (
    <h1>
      <Link to={`list/menu/${id}`}>
        <img alt="placeholder img" src="https://via.placeholder.com/150" />
        <div className="menu-contend">
          <div className="menu-header">
            <p>{`Menu: ${name}`}</p>
            <p>3,5€</p>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </h1>
  );
};
