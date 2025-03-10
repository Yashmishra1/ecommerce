import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';

const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false,
                }} name="Splash" component={Splash} />
                <Stack.Screen options={{
                    headerShown: false,
                }} name="Login" component={Login} />
                <Stack.Screen options={{
                    headerShown: false,
                }} name="Signup" component={Signup} />
                <Stack.Screen options={{
                    headerShown: false,
                }} name="Home" component={Home} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default AppNavigator