import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({ disabled, onPress, title, bgColor, textColor }) => {
    return (
        <TouchableOpacity disabled={disabled} style={{
            width: "85%", height: 50, borderRadius: 10, alignSelf: "center",
            marginTop: 50, backgroundColor: bgColor, justifyContent: "center", alignItems: "center"
        }} onPress={onPress}>
            <Text style={{ color: textColor }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton