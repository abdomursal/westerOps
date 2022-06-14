import { ItemEntitiesPropType } from "./ItemPropType"

export type FeaturedTaskProps={
  setSelectedTask:(value:ItemEntitiesPropType|undefined)=> void
  setIsOpenMenu:(value?: boolean)=> void
  selectedTask?:object|{}
}