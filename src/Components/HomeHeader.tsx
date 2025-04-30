import React, {FC} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Image, Platform, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ios = Platform.OS == 'ios';
const HomeHeader:React.FC = () => {
    const {top} = useSafeAreaInsets();
    return (
        <View style={{paddingTop:ios ? top : top + 10}} className={'flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow'}>
            <View>
                <Text style={{fontSize: hp(3)}} className={'font-medium text-white'}>Chats</Text>
            </View>
            <View>
                <Image style={{height:hp(6.0),aspectRatio:1, borderRadius:100}} source={require('../../Assets/login.jpg')}/>
            </View>
        </View>
    );
};

export default HomeHeader;
