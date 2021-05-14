import { Link } from "react-router-dom";
import "./menu.scss";
import { ItemProps } from "../../stores/item";

export const Item = ({ name, description, price, id }: ItemProps) => {
  return (
    <h1>
      <Link to={`list/menu/${id}`}>
        <img alt="placeholder img" src="https://via.placeholder.com/150" />
        <div className="menu-contend">
          <div className="menu-header">
            <p>{`Menu: ${name}`}</p>
            <p>{price}</p>
          </div>
          <p>{description}</p>
        </div>
      </Link>
    </h1>
  );
};
