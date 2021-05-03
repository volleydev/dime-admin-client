import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styles/menus.scss'

import { get } from "../stores/menu";

interface MenuProps {
  id: string;
}

export const MenusPage: FC = () => {
  // 1. props no need
  // 2. state?
  const [menus, setMenus] = useState<MenuProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenus = async () => {
    try {
      const menus = await get();
      setMenus(menus);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMenus();
  }, []);

  return (
    <main>
      Menus Page
      {error ? (
        <div>{`Error while fetching Menus: ${error}`}</div>
      ) : loading ? (
        <div>Loading Spinner</div>
      ) : (
        <ul className="menu-list">
          {menus.map((m, i) => (
            <Link to={`/menu/${m.id}`}>
              <img alt="placeholder img" src="https://via.placeholder.com/150" />
              <div className="menu-contend">
                <div className="menu-header">
              <p key={i}>{`Menu ${i}`}</p>
              <p>3,5€</p>
              </div>              
              <p>jdaudhasuhdauhdaou</p>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
};
