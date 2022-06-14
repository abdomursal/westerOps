import { ImageSourcePropType } from "react-native"

export type IconPropType={
    height:number
    width:number
    source:ImageSourcePropType
    onPress?:()=>void
}
