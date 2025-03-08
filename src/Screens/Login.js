import { View, Text, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { MMKV } from 'react-native-mmkv';
import Loader from '../common/Loader';

const Login = () => {
    const storage = new MMKV();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)
    const [state, setState] = useState({
        email: '',
        password: '',
        badEmail: false,
        badPassword: false,
    });

    const login = () => {
        setModalVisible(true)
        if (state.email == '') {
            setState(prev => ({ ...prev, badEmail: true }));
            setModalVisible(false)
        } else {
            setState(prev => ({ ...prev, badEmail: false }));
        }
        if (state.password == '') {
            setState(prev => ({ ...prev, badPassword: true }));
            setModalVisible(false)
        } else {
            setTimeout(() => {
                setState(prev => ({ ...prev, badPassword: false }));
                getData()
            }, 2000)
        }
    };

    const getData = () => {
        const mEmail = storage.getString('EMAIL')
        const mPassword = storage.getString("PASSWORD")
        if (state.email === mEmail && state.password === mPassword) {
            setModalVisible(false)
            navigation.navigate("Home")
        }
        else {
            setModalVisible(false)
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Image
                style={{
                    width: 80,
                    height: 80,
                    alignSelf: 'center',
                    marginTop: 100,
                }}
                source={require('../images/playstore.png')}
            />
            <Text
                style={{
                    marginTop: 100,
                    fontSize: 24,
                    alignSelf: 'center',
                    fontWeight: '600',
                    color: '#000',
                }}>
                Login
            </Text>
            <CustomTextInput
                icon={require('../images/email.png')}
                placeholder={'Enter Email id'}
                value={state.email}
                onChangeText={text =>
                    setState(prev => ({
                        ...prev,
                        email: text,
                        badEmail: state.badPassword.length > 0,
                    }))
                }
            />
            {state.badEmail === true ? (
                <Text style={{ marginLeft: 30, color: 'red' }}>
                    Please enter Email Id
                </Text>
            ) : null}
            <CustomTextInput
                icon={require('../images/password.png')}
                type="password"
                placeholder={'Enter Password'}
                password={state.password}
                onChangeText={text =>
                    setState(prev => ({
                        ...prev,
                        password: text,
                        badPassword: state.badEmail.length > 0,
                    }))
                }
            />

            {state.badPassword === true ? (
                <Text style={{ marginLeft: 30, color: 'red' }}>
                    Please enter Password
                </Text>
            ) : null}
            <CommonButton
                onPress={() => {
                    login();
                }}
                title={'Login'}
                bgColor={'#000'}
                textColor={'#fff'}
            />
            <Text
                style={{
                    textDecorationLine: 'underline',
                    fontSize: 20,
                    fontWeight: '700',
                    alignSelf: 'center',
                    marginTop: 20,
                }}
                onPress={() => navigation.navigate('Signup')}>
                Create New Account
            </Text>
            <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

export default Login;
