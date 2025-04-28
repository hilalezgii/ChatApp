import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'nativewind';
import './global.css';
import {View, Text, Button} from 'react-native';
import Login from './src/Screens/Login/Login.tsx';
import Register from './src/Screens/Register/Register.tsx';
import Home from './src/Screens/Home/Home.tsx';
import {AuthContextProvider, useAuth} from './src/Context/authContext.tsx';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
);

const AppContent = () => {
    const {isAuthenticated, logout, user} = useAuth();

    if (!isAuthenticated) {
        return <AuthStack/>;
    }

    // Giriş yapıldıktan sonra gösterilecek basit içerik
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Hoş geldin {user?.email}</Text>
            <Button title="Çıkış Yap" onPress={logout}/>
        </View>
    );
};

const App = () => {
    return (
        <AuthContextProvider>
            <NavigationContainer>
                <AppContent/>
            </NavigationContainer>
        </AuthContextProvider>
    );
};

export default App;
