import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Loader from '../common/Loader'

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View>
            <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    )
}

export default Home