import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const CustomTextInput = ({ value, onChangeText, placeholder, icon, type, keyboardType }) => {
    return (
        <View style={{ width: "85%", height: 50, borderWidth: 1, borderRadius: 10, alignSelf: "center", marginTop: 30, flexDirection: "row", alignItems: "center", paddingLeft: 20, paddingRight: 20 }}>
            <Image source={icon} style={{ width: 24, height: 24 }} />
            <TextInput keyboardType={keyboardType ? keyboardType : 'default'} value={value} onChangeText={onChangeText} secureTextEntry={type === "password" ? true : false} style={{ marginLeft: 10 }} placeholder={placeholder} />
        </View>
    )
}

export default CustomTextInput