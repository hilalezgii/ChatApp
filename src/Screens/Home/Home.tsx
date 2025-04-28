import {Text, TouchableOpacity, View} from 'react-native';

const Home:React.FC = () => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity>
                //daha sonra firebase ile authentication işlemleri için bağlanacak
                <Text>Log Out</Text>
                <TouchableOpacity>
                    <Text>chat ekranı</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};
export default Home;
