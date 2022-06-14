import { ItemEntitiesPropType } from "./ItemPropType"
import { TaskPropType } from "./StorePropType"

export type TaskListPropType={
    tasks:Array<TaskPropType>
    setIsOpenMenu:(value?:boolean)=> void,
    setSelectedTask:(item?:ItemEntitiesPropType)=>void
}