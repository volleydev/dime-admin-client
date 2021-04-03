import "./list.scss";

import { Menu } from "./menu";
import { Item } from "./item";
import { Extra } from "./extra";

export const List = ({ items = [], ...handlers }) => (
  <ul>
    {items.map(({ type, ...item }: any) => {
      if (type === "menu")
        return <Menu key={item.id} {...item} {...handlers} />;
      if (type === "item")
        return <Item key={item.id} {...item} {...handlers} />;
      return <Extra key={item.id} {...item} {...handlers} />;
    })}
  </ul>
);
