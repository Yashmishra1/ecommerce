import { View, Text, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { MMKV } from 'react-native-mmkv';

let isValid = true;
const Signup = () => {
    const storage = new MMKV();
    const navigation = useNavigation();
    const [state, setState] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        contactNumber: '',
        badName: '',
        badEmail: false,
        badMobile: false,
        badConfirmPassword: false,
        badPassword: false,
        buttonDisabled: false,
    });
    const validate = () => {
        setState(prev => ({ ...prev, buttonDisabled: true }))
        if (state.email == '') {
            setState(prev => ({ ...prev, badEmail: true }));
            isValid = false;
        } else {
            setState(prev => ({ ...prev, badEmail: false }));
        }
        if (state.name == '') {
            setState(prev => ({ ...prev, badName: true }));
            isValid = false;

        } else {
            setState(prev => ({ ...prev, badName: false }));
        }
        if (state.contactNumber == '') {
            setState(prev => ({ ...prev, badMobile: true }));
            isValid = false;

        } else {
            setState(prev => ({ ...prev, badMobile: false }));
        }
        if (state.password == '') {
            setState(prev => ({ ...prev, badPassword: true }));
            isValid = false;

        } else {
            setState(prev => ({ ...prev, badPassword: false }));
        }
        if (state.password !== state.confirmPassword) {
            setState(prev => ({ ...prev, badConfirmPassword: true }));
            isValid = false;
        } else {
            setState(prev => ({ ...prev, badConfirmPassword: false }));
        }
        setTimeout(() => {
            if (isValid === true) {
                saveData();
            } else {
                setState(prev => ({ ...prev, buttonDisabled: true }))
            }
        }, 2000)
    };

    const saveData = () => {
        storage.set('NAME', state.name)
        storage.set('EMAIL', state.email)
        storage.set('MOBILE', state.contactNumber)
        storage.set('PASSWORD', state.password)
        storage.set('CONFIRMPASSWORD', state.confirmPassword)
        navigation.goBack()
    }

    return (
        <ScrollView>

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
                    Create New Account
                </Text>
                <CustomTextInput
                    icon={require('../images/user.png')}
                    placeholder={'Enter name'}
                    value={state.name}
                    onChangeText={text => setState(prev => ({ ...prev, name: text }))}
                />
                {state.badName === true ? (
                    <Text style={{ marginLeft: 30, color: 'red' }}>Please enter name</Text>
                ) : null}
                <CustomTextInput
                    icon={require('../images/email.png')}
                    placeholder={'Enter email'}
                    value={state.email}
                    onChangeText={text => setState(prev => ({ ...prev, email: text }))}
                />
                {state.badEmail === true ? (
                    <Text style={{ marginLeft: 30, color: 'red' }}>
                        Please enter Email Id
                    </Text>
                ) : null}
                <CustomTextInput
                    icon={require('../images/mobile.png')}
                    placeholder={'Enter mobile number'}
                    keyboardType={'number-pad'}
                    value={state.contactNumber}
                    onChangeText={text =>
                        setState(prev => ({ ...prev, contactNumber: text }))
                    }
                />
                {state.badMobile === true ? (
                    <Text style={{ marginLeft: 30, color: 'red' }}>
                        Please enter mobile number
                    </Text>
                ) : null}
                <CustomTextInput
                    icon={require('../images/password.png')}
                    type="password"
                    value={state.password}
                    keyboardType={'number-pad'}
                    onChangeText={text => setState(prev => ({ ...prev, password: text }))}
                    placeholder={'Enter Password'}
                />
                {state.badPassword === true ? (
                    <Text style={{ marginLeft: 30, color: 'red' }}>
                        Please enter password
                    </Text>
                ) : null}
                <CustomTextInput
                    icon={require('../images/password.png')}
                    type="password"
                    value={state.confirmPassword}
                    keyboardType={'number-pad'}
                    onChangeText={text =>
                        setState(prev => ({ ...prev, confirmPassword: text }))
                    }
                    placeholder={'Enter Confirm Password'}
                />
                {state.badConfirmPassword === true ? (
                    <Text style={{ marginLeft: 30, color: 'red' }}>
                        Please enter correct password
                    </Text>
                ) : null}
                <CommonButton
                    onPress={() => {
                        validate();
                    }}
                    title={'Sign Up'}
                    // bgColor={state.buttonDisabled ? "#8e8e8e" : '#000'}
                    bgColor={'#000'}
                    // disabled={state.buttonDisabled}
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
                    onPress={() => navigation.goBack()}>
                    Already have account?
                </Text>
            </View>
        </ScrollView>
    );
};

export default Signup;
