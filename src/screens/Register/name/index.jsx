import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const RegisterNameScreen = () => {
    const [name, setName] = useState('')
        
    const navigation = useNavigation()

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o nome completo do visitante'
            label='Nome Comleto'
            onChange={setName}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('RegisterEmailScreen')}
        />
    )
}

export default RegisterNameScreen