import { ItemEntitiesPropType } from "./ItemPropType";

export type MenuPropType = {
  menuVisible?: boolean;
  setMenuVisible: (menuVisible?: boolean) => void;
  updateModalIsOpen?: boolean;
  setUpdateModalIsOpen: (value?: boolean) => void;
  selectedTask?: ItemEntitiesPropType;
  setSelectedTask: (value?:ItemEntitiesPropType) => void;
};
