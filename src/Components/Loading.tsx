import {Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface LoadingProps {
    size: number;
}

const Loading: React.FC<LoadingProps> = ({size}) => {
    return (
        <View style={{height: size, aspectRatio: 1}}>
            <LottieView style={{flex: 1}} source={require('../Assets/Images/loading.json')} autoPlay loop/>
        </View>
    );
};

export default Loading;
