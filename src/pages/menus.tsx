import { FC, useEffect, useState } from "react";
import "./styles/menus.scss";

import { get, MenuProps } from "../stores/menu";
import { List } from "../components/list/list";

export const MenusPage: FC = () => {
  const [menus, setMenus] = useState<MenuProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getMenus = async () => {
    try {
      const { items: menus } = await get();
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

  console.log(menus);

  return (
    <main>
      {error ? (
        <div>{`Error while fetching Menus: ${error}`}</div>
      ) : loading ? (
        <div>Loading Spinner</div>
      ) : (
        // Lass mal hier die List component benutzen die unter ./list angelegt ist
        // Das soll eine reusable component werden mit der wir alle Liste representieren
        <List items={menus} type="menu" />
        // <ul className="menu-list">
        //   {menus.map((m, i) => (

        //   ))}
        // </ul>
      )}
    </main>
  );
};
