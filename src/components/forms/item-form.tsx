import { useState } from "react";
import { ItemProps, ITEMS, post } from "../../stores/item";
import {
  getGlobalState,
  setGlobalState,
  updateGlobalState,
} from "../../utils/globalState";
import { MODAL } from "../mechanics/modal";

export const ItemForm = (item: ItemProps) => {
  const [name, setName] = useState(item.name || "");
  const [description, setDescription] = useState(item.description || "");
  const [price, setPrice] = useState(item.price || 0);

  const handleSubmit = async () => {
    const id = await post({ name, description, price });
    setGlobalState(MODAL, { component: "" });
    // setGlobalState(ITEMS, [
    //   ...getGlobalState(ITEMS),
    //   { id, name, description, price },
    // ]);
    updateGlobalState(ITEMS, (items) => [
      ...items,
      { id, name, description, price },
    ]);
  };

  return (
    <div className="form">
      <input
        type="text/name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder="Menu name"
      />
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Menu description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="0.00€"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
