import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{flexDirection : "row",
        paddingHorizontal : 20,
    height : 50,backgroundColor : "#fff", justifyContent : "space-between", alignItems : "center"}}>
        <Text style={{fontSize : 20,fontWeight : "bold"}}>GroceryApp</Text>
        <Text>Mode</Text>
    </View>
  )
}

export default Header