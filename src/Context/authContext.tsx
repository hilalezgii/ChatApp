import React, { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type AuthContextType = {
    user: FirebaseAuthTypes.User | null;
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
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setIsAuthenticated(true);
            } else {
                setUser(null);
                setIsAuthenticated(false);
            }
        });

        return unsubscribe;
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.error('Login Error:', e);
            throw e;
        }
    };

    const logout = async () => {
        try {
            await auth().signOut();
        } catch (e) {
            console.error('Logout Error:', e);
            throw e;
        }
    };

    const register = async (email: string, password: string, userName: string, profileUrl: string) => {
        try {
            const userCredential = await auth().createUserWithEmailAndPassword(email, password);
            await userCredential.user.updateProfile({
                displayName: userName,
                photoURL: profileUrl,
            });
            setUser(userCredential.user);
        } catch (e) {
            console.error('Register Error:', e);
            throw e;
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
