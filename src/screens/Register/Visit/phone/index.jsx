import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterVisitedPhoneScreen = () => {
    const [phone, setPhone] = useState()

    const navigation = useNavigation()

    return (
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o numero de contato do visitado'
            label='Número de contato com DDD'
            onChange={setPhone}
            buttonTitle='Próximo'
            onPress={() => navigation.navigate('ChooseAreaScreen')}
        />
    )
}

export default RegisterVisitedPhoneScreen