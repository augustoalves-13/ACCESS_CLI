import { useNavigation } from "@react-navigation/native"
import EntryInput from "../../components/Input"
import { Container } from "../../components/styles/styles"
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { useState } from "react"
import TitleScreens from "../../components/Title"

const LoginScreen = () => {
    const [modalVisibily, setModalVisibily] = useState(false)
    const navigation = useNavigation()

    const data = [
        { title: 'RECEPCIONISTA', navigate: 'ReceptionistMenuScreen' },
        { title: 'CHECK-IN / CHECK-OUT', navigate: 'GateMenuScreen' },
        { title: 'PORTARIA VEICULOS', navigate: 'VechileMenuScreen' },

        { title: 'Portaria', navigate: '' },
        { title: 'Portaria', navigate: '' },
        { title: 'Portaria', navigate: '' },
    ]

    return (
        <Container>
            <View style={styles.contentView}>

                <Image style={{ width: "70%", objectFit: 'contain' }} source={require('../../../assets/images/logoAccess.png')} />

                <EntryInput
                    label='Login'
                    numericKeyboard={true}
                />

                <EntryInput
                    label='Senha'
                    numericKeyboard={true}
                />

                <TouchableOpacity onPress={() => setModalVisibily(true)} style={styles.loginButton}>
                    <Text style={{ fontWeight: "700", fontSize: 18 }}>Login</Text>
                </TouchableOpacity>

            </View>
            {modalVisibily &&
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View>
                            <Text style={{ fontWeight: '700', fontSize: 20 }}>Login</Text>
                            <Text>Escolha a sua portaria:</Text>
                        </View>
                        <View style={{ width: '100%', gap: 10 }}>
                            {data.map(item => (
                                <TouchableOpacity onPress={() => navigation.navigate(item.navigate)} style={{ elevation: 5, height: 40, width: '100%', backgroundColor: '#fff', borderRadius: 10, justifyContent: "center", padding: 10 }}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            }
        </Container>
    )
}


const styles = StyleSheet.create({

    modalContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#00000071',
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalContent: {
        height: '70%',
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        gap: 20
    },

    contentView: {
        height: "90%",
        backgroundColor: "#151515",
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    loginButton: {
        width: "40%",
        height: 45,
        borderRadius: 15,
        backgroundColor: "#fcb803",
        alignItems: "center",
        justifyContent: "center"
    },
})

export default LoginScreen