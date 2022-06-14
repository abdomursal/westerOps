import { ItemEntitiesPropType } from "./ItemPropType";

export type ModalPropType = {
  setModalVisible: (value?: boolean) => void;
  modalVisible: boolean;
  type?: string;
  selectedTask?: ItemEntitiesPropType;
  setSelectedTask: (item?:ItemEntitiesPropType) => void;
};
