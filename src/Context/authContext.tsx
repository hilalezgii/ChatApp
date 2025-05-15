import React, {createContext, useEffect, useState, ReactNode, useContext} from 'react';
import {onAuthStateChanged} from '@react-native-firebase/auth';
import {auth} from '../../firebaseConfig.ts';


type AuthContextType = {
    user: null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string, userName: string, profileUrl: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth,(user)=>{
            if (user) {
                setIsAuthenticated(true);
            }
            else {
                setIsAuthenticated(false);
            }
        });
    }, []);


    const login = async (email: string, password: string) => {
        try {
            console.log('email', email, password);
        } catch (e) {
            console.error('Login Error:', e);
        }
    };

    const logout = async () => {
        try {
            console.log('logout');
        } catch (e) {
            console.error('Logout Error:', e);
        }
    };

    const register = async (email: string, password: string, userName: string, profileUrl: string) => {
        try {
            console.log('register', email, password);
        } catch (e) {
            console.error('Register Error:', e);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const value = useContext(AuthContext);

    if (!value) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }

    return value;
};


