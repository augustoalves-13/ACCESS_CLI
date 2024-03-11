import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const RegisterEmailScreen = () => {
    const [email, setEmail] = useState('')
    
    const navigation = useNavigation()


    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o e-mail visitante'
            label='E-mail'
            onChange={setEmail}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('RegisterCompanyScreen')}
        />
    )
}

export default RegisterEmailScreen