import "./list.scss";

import { Menu } from "./menu";
import { Item } from "./item";
import { Extra } from "./extra";
import { MenuProps } from "../../stores/menu";

// Wir benutzen eine einheitliche List Component damit das Styling für die liste konstant bleibt
// und splitten die list items auf in Menu/Item/Extra um für diese List items eine jeweils
// spezifische Komponente zu rendern

interface ListProps {
  items: MenuProps[];
  type: "menu" | "item" | "extra";
}

export const List = ({ items = [], type }: ListProps) => (
  <ul className="list">
    {console.log(items)}
    {items.map((item) =>
      type === "menu" ? (
        <Menu key={item.id} {...item} />
      ) : type === "item" ? (
        <Item key={item.id} {...item} />
      ) : (
        <Extra key={item.id} {...item} />
      )
    )}
  </ul>
);
