export type ItemPropType = {
  setSelectedTask: (obj?:object|{}) => void;
  setIsOpenMenu: (value: boolean) => void | undefined;
  selectedTask?: object | {};
  item: ItemEntitiesPropType;
};

export type ItemEntitiesPropType = {
  id?: number;
  description?: string;
  featured?: boolean;
};
