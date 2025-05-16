import React, { useState } from 'react';
import {
    Image,
    Platform,
    Text,
    View,
    Alert,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../Context/authContext.tsx';

const ios = Platform.OS === 'ios';

const HomeHeader = () => {
    const { user, logout } = useAuth();
    const { top } = useSafeAreaInsets();
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    };

    const handleProfile = () => {
        Alert.alert('Save');
        closeMenu();
    };

    const handleSignOut = async () => {
        await logout();
        closeMenu();
    };

    return (
        <View
            style={{ paddingTop: ios ? top : top + 10 }}
            className="flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow-lg"
        >
            <View>
                <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
                    Chats
                </Text>
            </View>

            <View className="relative">
                <TouchableOpacity onPress={toggleMenu}>
                    <Image
                        style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
                        className="border-2 border-white"
                        source={user?.profileUrl || require('../Assets/login.jpg')}
                    />
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={menuVisible}
                    onRequestClose={closeMenu}
                >
                    <TouchableWithoutFeedback onPress={closeMenu}>
                        <View className="flex-1 bg-opacity-30">
                            <View
                                style={{ top: ios ? top + hp(6) : top + hp(8), right: 20 }}
                                className="absolute bg-white rounded-lg p-2 w-40 shadow-xl"
                            >
                                <TouchableOpacity
                                    className="py-2.5 px-4 rounded-md active:bg-gray-100"
                                    onPress={handleProfile}
                                >
                                    <Text className="text-base font-normal">Profile</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    className="py-2.5 px-4 rounded-md active:bg-gray-100"
                                    onPress={handleSignOut} //firebase auth ile lohout işlemleri bağlanacak
                                >
                                    <Text className="text-base font-normal">Sign Out</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </View>
    );
};

export default HomeHeader;
