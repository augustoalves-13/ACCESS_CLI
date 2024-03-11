import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterVisitedEmailScreen = () => {
    const [email, setEmail] = useState()

    const navigation = useNavigation()

    return (
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o e-mail do visitado'
            label='E-mail'
            onChange={setEmail}
            buttonTitle='Próximo'
            onPress={() => navigation.navigate('RegisterVisitedPhoneScreen')}
        />
    )
}

export default RegisterVisitedEmailScreen