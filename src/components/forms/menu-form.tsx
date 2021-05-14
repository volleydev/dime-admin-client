import { useState } from "react";
import { MenuProps, post } from "../../stores/menu";

export const MenuForm = (menu: MenuProps) => {
  const [name, setName] = useState(menu.name || "");
  const [description, setDescription] = useState(menu.description || "");

  const handleSubmit = async () => {
    const newMenu = await post({ name, description });
    console.log(newMenu);
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
      <input type="number" placeholder="0.00€"></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
