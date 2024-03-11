import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterCpfScreen = () => {
    const [cpf, setCpf] = useState('')
    
    const navigation = useNavigation()

    const navigator = () => {
        if(!cpf){
            navigation.navigate('KindDocumentScreen')
        } else {
            navigation.navigate('Camera')
        }
    }

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o número do documento do visitante'
            label='CPF'
            keyboardNumeric={true}
            onChange={setCpf}
            buttonTitle={cpf ? 'Próximo' : 'Não tenho cpf'}
            onPress={navigator}
        />
    )
}

export default RegisterCpfScreen