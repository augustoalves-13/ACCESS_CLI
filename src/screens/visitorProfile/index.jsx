import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Container, ContentView } from "../../components/styles/styles"
import UserSettings from "../../components/userSettings"
import { useState } from "react"
import ButtonSet from "../../components/Buttons/ButtonSet"
import { Path, Svg } from "react-native-svg"
import { useNavigation } from "@react-navigation/native"

const VisitorProfile = ({ route }) => {
    const [infoVisibily, setInfoVisibily] = useState(false)
    const navigation = useNavigation()
    const { typeMethod } = route.params

    const SetInput = (props) => {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <View style={styles.input}>
                    <Text style={{ opacity: 0.6, fontWeight: '700' }}>{props.value}</Text>
                </View>
            </View>
        )
    }

    const buttonTitle = () => {
        if (typeMethod == 'Check-In Vechile') {
            return 'Check-In'
        } else if (typeMethod == 'Check-Out Vechile') {
            return 'Check-Out'
        } else {
            return typeMethod
        }
    }

    return (
        <Container>
            <View></View>
            <View style={styles.contentView}>

                <SetInput
                    label='Documento - (tipo do documento)'
                    value='123.123.123-12'
                />
                <SetInput
                    label='Empresa'
                    value='uGet'
                />

                <SetInput
                    label='E-mail'
                    value='guto@uget.com.br'
                />

                <SetInput
                    label='Telefone'
                    value='(11) 1234-1234'
                />

                <View style={infoVisibily ? styles.infoHigh : styles.infoLow}>
                    <Text style={styles.boldText}> 18/08 - 02/09    10:00 - 12:00</Text>

                    <View style={{ width: '90%', flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={styles.boldText}>Motivo:</Text>
                            <Text>Reunião</Text>
                        </View>

                        <TouchableOpacity title='sla' onPress={() => setInfoVisibily(!infoVisibily)}>

                            {infoVisibily ?
                                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 46 56" fill="none">
                                    <Path d="M26 3C26 1.34315 24.6569 0 23 0C21.3431 0 20 1.34315 20 3H26ZM20.8787 55.1213C22.0503 56.2929 23.9497 56.2929 25.1213 55.1213L44.2132 36.0294C45.3848 34.8579 45.3848 32.9584 44.2132 31.7868C43.0416 30.6152 41.1421 30.6152 39.9706 31.7868L23 48.7574L6.02944 31.7868C4.85786 30.6152 2.95837 30.6152 1.7868 31.7868C0.615224 32.9584 0.615224 34.8579 1.7868 36.0294L20.8787 55.1213ZM20 3L20 53H26L26 3H20Z" fill="#151515" />
                                </Svg>
                                :
                                <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 56 45" fill="none">
                                    <Path d="M3 19.5C1.34315 19.5 0 20.8431 0 22.5C0 24.1569 1.34315 25.5 3 25.5V19.5ZM55.1213 24.6213C56.2929 23.4497 56.2929 21.5503 55.1213 20.3787L36.0294 1.2868C34.8579 0.115223 32.9584 0.115223 31.7868 1.2868C30.6152 2.45837 30.6152 4.35786 31.7868 5.52944L48.7574 22.5L31.7868 39.4706C30.6152 40.6421 30.6152 42.5416 31.7868 43.7132C32.9584 44.8848 34.8579 44.8848 36.0294 43.7132L55.1213 24.6213ZM3 25.5H53V19.5H3V25.5Z" fill="#151515" />
                                </Svg>
                            }

                        </TouchableOpacity>

                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.boldText}>Áreas de acesso:</Text>
                        <Text>Área 1</Text>
                    </View>

                    {typeMethod == 'Check-In Vechile' || typeMethod == 'Check-Out Vechile' &&
                    
                        <View style={styles.textView}>
                            <Text style={styles.boldText}>Carro:</Text>
                            <Text>Placa: ABC 1234</Text>
                            <Text>Modelo: CLIO</Text>
                            <Text>Placa: VERMELHO</Text>
                        </View>

                    }

                    <View style={styles.textView}>
                        <Text style={[styles.boldText, { fontSize: 15 }]}>Rafael Setrak (visitado)</Text>
                        <Text style={[styles.boldText, { fontSize: 15 }]}>(11) 1234-1234</Text>
                        <Text style={[styles.boldText, { fontSize: 15 }]}>Matricula 1234567</Text>
                        <Text style={[styles.boldText, { fontSize: 15 }]}>Suplente:</Text>
                    </View>
                </View>
                <ButtonSet
                    onPress={()=>navigation.navigate('CheckInRealized', {typeMethod})}
                    title={buttonTitle()}
                />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({

    contentView: {
        height: '90%',
        width: '100%',
        backgroundColor: '#151515',
        borderTopStartRadius: 80,
        borderTopEndRadius: 80,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20
    },

    inputContainer: {
        width: "80%",
        gap: 10,
    },

    label: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,

    },

    input: {
        width: "100%",
        height: 40,
        backgroundColor: "#e5e5e5",
        paddingHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    infoLow: {
        gap: 15,
        height: 100,
        width: '80%',
        backgroundColor: '#d9d9d9',
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        overflow: 'hidden'
    },

    infoHigh: {
        gap: 20,
        position: 'absolute',
        height: '70%',
        width: '80%',
        backgroundColor: '#d9d9d9',
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        overflow: 'hidden'
    },

    textView: {
        width: '90%'
    },

    boldText: {
        fontSize: 17,
        fontWeight: '700'
    }
})

export default VisitorProfile