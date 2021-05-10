import { useRef } from "react";
import { useGlobalState, setGlobalState } from "../../utils/globalState";
import "./Modal.scss";

// How to make a components visible in the Modal
// 1. Import component (like MenuForm)
// 2. Define exported ídentifier for that component (MODAL_COMPONENTS)
// 3. Reference component with defined identifier (COMPONENTS)
// 4. Call setGlobalState("MODAL", MODAL_COMPONENTS.indentifier)

import { MenuForm } from "../forms/menu-form";

export const MODAL = "MODAL";

export const MODAL_COMPONENTS = {
  MENU_FORM: "MENU_FORM",
};

const COMPONENTS = {
  [MODAL_COMPONENTS.MENU_FORM]: MenuForm,
};

const INITIAL_CONFIG = {
  component: "",
  props: {},
};

let preventClose = false;

export const Modal = () => {
  const [modal, setModal] = useGlobalState(MODAL, INITIAL_CONFIG);
  const ref: any = useRef(null);

  const component = (modal.component || "").toUpperCase();

  const closeModal = (payload?: any) => {
    if (modal.onClose) {
      modal.onClose(payload);
    }
    setGlobalState(MODAL, INITIAL_CONFIG);
  };

  if (!Object.keys(COMPONENTS).includes(component)) {
    document.body.style.overflow = "auto";
    return null;
  }

  const handleMouseDown = (e) => {
    const clickInside = e.target !== ref.current;
    if (clickInside) {
      preventClose = true;
    }
  };

  const handleMouseUp = (e) => {
    if (!preventClose && e.target.classList.contains("modal")) {
      preventClose = false;
      setModal(INITIAL_CONFIG);
    } else {
      preventClose = false;
    }
  };

  const renderComponent = (component: string) => {
    const SelectedComponent = COMPONENTS[component];

    return (
      <SelectedComponent
        onClick={(e) => e.stopPropagation()}
        {...modal.props}
        closeModal={closeModal}
      />
    );
  };

  return (
    <div
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="modal centered-grid full-screen"
    >
      {renderComponent(component)}
    </div>
  );
};
