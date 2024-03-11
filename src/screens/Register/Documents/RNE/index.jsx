import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterRNEScreen = () => {
    const [Rne, setRne] = useState('')
    
    const navigation = useNavigation()

    const navigator = () => {
        if(!Rne){
            navigation.navigate('KindDocumentScreen')
        } else {
            navigation.navigate('Camera')
        }
    }

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o número do documento do visitante'
            label='RNE'
            keyboardNumeric={true}
            onChange={setRne}
            buttonTitle={Rne ? 'Próximo' : 'Não tenho RNE'}
            onPress={navigator}
        />
    )
}

export default RegisterRNEScreen