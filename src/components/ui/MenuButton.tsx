import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/colors'
import { MenuButtonPropType } from '../../types/MenuButtonPropType'

const MenuButton = ({onPress}:MenuButtonPropType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.circle}/>
      <View style={styles.circle}/>
      <View style={styles.circle}/>
    </TouchableOpacity>
  )
}

export default MenuButton

const styles = StyleSheet.create({
    container:{
        width:22,
        height:25,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        borderWidth:0,
        backgroundColor:'transparent',
        
    },
    circle:{
        height:4,
        width:4,
        borderRadius:2,
        backgroundColor:COLORS.gray
    }
})