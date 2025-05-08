import {Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

const Home:React.FC = () => {
    return (
        <View className={"flex-1 bg-white"}>
            <Text style={{ fontSize: hp(3), textAlign: 'center' }} className="mt-8 font-bold tracking-wider text-neutral-800">
                Welcome Home Page
            </Text>
        </View>
    );
};
export default Home;
