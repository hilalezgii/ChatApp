import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useRef, useState} from 'react';
import {Alert, Image, Pressable, StatusBar, Text, TextInput, TouchableOpacity, View} from 'react-native';
import 'nativewind';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Loading from '../../Components/Loading.tsx';
import CustomKeyboard from "../../Components/CustomKeyboard.tsx";

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    // useRef ile referansları belirtiyoruz
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Sign In', 'Please fill all the fields');
            return;
        }

        //login process
    };

    return (
        <CustomKeyboard>
            <StatusBar barStyle="dark-content"/>
            <View style={{backgroundColor: 'white', paddingHorizontal: wp(5)}} className="flex-1 gap-2">
                <View className="items-center">
                    <Image style={{height: hp(25)}} resizeMode="contain" source={require('../../Assets/login.jpg')}/>
                </View>
                <View className="gap-10">
                    <Text style={{fontSize: hp(4), textAlign: 'center'}}
                          className="font-bold tracking-wider text-neutral-800">
                        Sign In
                    </Text>
                    <View className="gap-4">
                        <View style={{height: hp(7)}}
                              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                            <Octicons name="mail" size={hp(2.7)} color="gray"/>
                            <TextInput

                                onChangeText={value => emailRef.current = value}
                                style={{fontSize: hp(2)}}
                                className="flex-1 font-semibold text-neutral-700"
                                placeholder="Email Address"
                                placeholderTextColor="gray"
                            />
                        </View>
                        <View className="gap-3">
                            <View style={{height: hp(7)}}
                                  className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl">
                                <Octicons name="lock" size={hp(2.7)} color="gray"/>
                                <TextInput
                                    onChangeText={value => passwordRef.current = value}
                                    style={{fontSize: hp(2)}}
                                    className="flex-1 font-semibold text-neutral-700"
                                    placeholder="Password"
                                    secureTextEntry
                                    placeholderTextColor="gray"
                                />
                            </View>
                            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">
                                Forgot Password?
                            </Text>
                        </View>

                        {/* Submit Button */}

                        <View>

                            {
                                loading ? (
                                    <View className={'flex-row justify-center'}>
                                        <Loading size={hp(12)}/>
                                    </View>
                                ) : (
                                    <TouchableOpacity onPress={handleLogin} style={{height: hp(6.5)}}
                                                      className="bg-indigo-500 rounded-xl justify-center items-center">
                                        <Text style={{fontSize: hp(2.7)}}
                                              className="text-white font-bold tracking-wider">
                                            Sign In
                                        </Text>
                                    </TouchableOpacity>
                                )
                            }

                        </View>


                        {/* Sign Up Text */}
                        <View className="flex-row justify-center">
                            <Text style={{fontSize: hp(1.8)}} className="font-semibold text-neutral-500">
                                Don't have an account?
                            </Text>
                            <Pressable onPress={() => navigation.navigate('Register')}>
                                <Text style={{fontSize: hp(1.8)}} className="font-bold text-indigo-500">
                                    Sign Up
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </CustomKeyboard>
    );
};

export default Login;
