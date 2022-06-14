import { ItemEntitiesPropType } from "./ItemPropType"

export type InputFieldPropType={
    placeholder:string
    setDescription:()=>void
    selectedTask:ItemEntitiesPropType
    setSelectedTask:()=>void,
}