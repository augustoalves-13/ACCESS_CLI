import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonSet from "../../../components/Buttons/ButtonSet";


export default function TermsScreen() {

    const navigation = useNavigation();

    function handleTermos() {
        return (navigation.navigate('UserDocument'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>

                <View style={styles.logoAccess}>
                    <Image style={{ height: 70, width: 180 }} source={require('../../../../assets/images/logoAccess.png')} />
                </View>

                <Text style={styles.textTermos}>Lorem Ipsum is simply dummy text of the prinrrting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

                <ButtonSet
                    onPress={()=>{navigation.navigate('RegisterCpfScreen')}}
                    title='Li, e aceito' 
                    />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        backgroundColor: '#fcb803',
    },

    box: {
        paddingTop: 15,
        height: '100%',
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        backgroundColor: '#151515',
        alignItems: "center",
        justifyContent: 'space-between'
    },

    logoAccess: {
        borderColor: '#fcb803',
        borderWidth: 3,
        borderStyle: 'solid',
        minHeight: '20%',
        minWidth: '92%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 120,
    },

    textTermos: {
        color: '#fff',
        width: 300,
        lineHeight: 25,
        fontWeight: "bold",
        fontSize: 15,
    },

    checkArea: {
        height: 55,
        marginLeft: 10,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: -15
    },

    btnArea: {
        flexDirection: 'row',
        gap: 65,
    },

    backButton: {
        height: 45,
        width: 110,
        backgroundColor: '#f5f5f7',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center",
    },

    nextButton: {
        height: 45,
        width: 110,
        borderColor: '#f5f5f7',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center",
    },

    textNextButton: {
        color: '#f5f5f7',
        fontWeight: "bold"
    },
})