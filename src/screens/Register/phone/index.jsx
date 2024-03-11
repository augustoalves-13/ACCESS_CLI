import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const RegisterPhoneScreen = () => {
    const [phone, setPhone] = useState('')
    
    const navigation = useNavigation()

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o número de contato do visitante'
            label='Número de contato com DDD'
            onChange={setPhone}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('TypeVisitorScreen')}
        />
    )
}

export default RegisterPhoneScreen