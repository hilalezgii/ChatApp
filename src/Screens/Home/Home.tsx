import {Text, TouchableOpacity, View} from 'react-native';

const Home:React.FC = () => {
    return (
        <View className={"flex-1 bg-white"}>
            <Text>Home</Text>
            <TouchableOpacity>
                //daha sonra firebase ile authentication işlemleri için bağlanacak
                <Text>Log Out</Text>

            </TouchableOpacity>
        </View>
    );
};
export default Home;
