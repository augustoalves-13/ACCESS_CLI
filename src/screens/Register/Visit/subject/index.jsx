import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterSubjectScreen = () => {
    const [subject, setSubject] = useState()

    const navigation = useNavigation()

    return (
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o assunto da visita'
            label='Assunto da visita'
            onChange={setSubject}
            buttonTitle='Próximo'
            onPress={() => navigation.navigate('RegisterVisitedEmailScreen')}
        />
    )
}

export default RegisterSubjectScreen