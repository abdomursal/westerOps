
export const isFindId =(array:Array<object|number>, id:number)=>{
   return array.find((item:object|any) => item.id == id)
}

export const removeItemById=(array: Array<object>, id:number)=>{
    return array.filter((item:object|any) => item.id !== id)
}

export const isCompleted =(array:Array<number>, id:number)=>{
    return array.find((item:number) => item == id)
 }