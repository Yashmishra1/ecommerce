import { View, Text, Image } from 'react-native'
import React, { useEffect, } from 'react'
import { useNavigation } from "@react-navigation/native"
import { MMKV } from 'react-native-mmkv'

const Splash = () => {
    const storage = new MMKV()
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 3000)
    }, [])
    const getData = () => {
        const email = storage.getString("EMAIL")
        console.log("email", email)
        if (email == '' || email == undefined || email == null) {
            navigation.navigate("Login")
            console.log("first")
        } else {
            navigation.navigate("Home")
            console.log("second")
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <Image source={require("../images/playstore.png")} style={{ width: 200, height: 200 }} />
        </View>
    )
}

export default Splash