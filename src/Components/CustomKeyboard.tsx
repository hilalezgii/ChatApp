import React, { ReactNode } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    ViewStyle,
    StyleProp
} from 'react-native';

interface CustomKeyboardProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ios = Platform.OS === 'ios';

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({ children, style }) => {
    return (
        <KeyboardAvoidingView
            style={[{ flex: 1 }, style]}
            behavior={ios ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                bounces={false}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default CustomKeyboard;
