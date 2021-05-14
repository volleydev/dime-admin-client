import { FC, useEffect, useState } from "react";
import { List } from "../components/list/list";
import { get, ITEMS } from "../stores/item";
import { useGlobalState } from "../utils/globalState";

export const ItemsPage: FC = () => {
  const [items, setItems] = useGlobalState(ITEMS, []);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  const getItems = async () => {
    try {
      const { items } = await get();
      setItems(items);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getItems();
  }, []);

  console.log(items);

  return (
    <main>
      {error ? (
        <div>{`Error while fetching Menus: ${error}`}</div>
      ) : loading ? (
        <div>Loading Spinner</div>
      ) : (
        // Lass mal hier die List component benutzen die unter ./list angelegt ist
        // Das soll eine reusable component werden mit der wir alle Liste representieren
        <List items={items} type="item" />
        // <ul className="menu-list">
        //   {menus.map((m, i) => (

        //   ))}
        // </ul>
      )}
    </main>
  );
};
