import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterRGScreen = () => {
    const [Rg, setRg] = useState('')
    
    const navigation = useNavigation()

    const navigator = () => {
        if(!Rg){
            navigation.navigate('KindDocumentScreen')
        } else {
            navigation.navigate('Camera')
        }
    }

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o número do documento do visitante'
            label='RG - Registro Geral'
            keyboardNumeric={true}
            onChange={setRg}
            buttonTitle={Rg ? 'Próximo' : 'Não tenho RG'}
            onPress={navigator}
        />
    )
}

export default RegisterRGScreen