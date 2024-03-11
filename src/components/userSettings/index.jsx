import { useNavigation } from "@react-navigation/native"
import { Button, Image, Text, TouchableOpacity, View } from "react-native"

const UserSettings = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flexDirection: "row", height: "20%", alignItems: "center", justifyContent: "space-evenly" }}>
            <Image style={{ width: "20%", objectFit: 'contain' }} source={require('../../../assets/images/user.png')} />

            <View>
                <Text>Gabriel Gleydstone Silva Cordeiro</Text>
                <Text>RECEPCIONISTA</Text>
                <Text>Portaria 1</Text>
            </View>
            <TouchableOpacity title="config" onPress={()=>navigation.navigate('InitialAdmScreen')}>
                <Image style={{width: 40, objectFit: "contain"}} source={require('../../../assets/images/settings.png')}/>
            </TouchableOpacity>
        </View>
    )
}

export default UserSettings 