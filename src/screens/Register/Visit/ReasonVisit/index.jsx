import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Container, ContentView } from "../../../../components/styles/styles"
import TitleScreens from "../../../../components/Title"
import ButtonSet from "../../../../components/Buttons/ButtonSet"
import { useNavigation } from "@react-navigation/native"
import UserSettings from "../../../../components/userSettings"

const ReasonVisitScreen = () => {
    const navigation = useNavigation()

    const data = [
        { id: 1 }, { id: 2 }, { id: 3 },{ id: 3 },{ id: 3 },{ id: 3 },{ id: 3 },{ id: 3 },{ id: 3 },
    ]

    return (
        <Container>
            
            <UserSettings/>

            <ContentView>
                <TitleScreens
                    title='Cadastro'
                    subTitle='Informe o motivo da visita'
                />

                <View style={{ width: "100%", height: "50%", flexDirection: 'row', justifyContent: "center" ,gap:10, flexWrap: "wrap"}}>

                    {
                        data.map(item => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('RegisterSubjectVisitScreen')}
                                style={styles.btnContainer}
                            >
                                <Text style={styles.buttonText}></Text>
                            </TouchableOpacity>
                        ))
                    }

                </View>

                <ButtonSet
                    title='Próximo '
                    onPress={() => navigation.navigate('RegisterVisitedEmailScreen')}
                />
            </ContentView>
        </Container>
    )
}

export default ReasonVisitScreen

const styles = StyleSheet.create({
    btnContainer: {
        height: 75,
        width: 100,
        borderRadius: 12,
        backgroundColor: '#f5f5f7',
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        width: '90%',
        textAlign: "center",
        fontWeight: "bold",
    }
})