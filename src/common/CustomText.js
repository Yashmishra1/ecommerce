import { View, Text } from 'react-native'
import React from 'react'

const CustomText = ({ fontFamily, fontVariant, children }) => {
    let fontSize = 12;

    switch (fontVariant) {
        case "h1":
            fontSize = 14;
            break;
        case "h2":
            fontSize = 10;
            break;
    }
    return (
        <View>
            <Text style={{ fontSize: fontSize }}>{children}</Text>
        </View>
    )
}

export default CustomText