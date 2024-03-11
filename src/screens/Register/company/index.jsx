import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const RegisterCompanyScreen = () => {
    const [company, setCompany] = useState('')
    
    const navigation = useNavigation()


    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite a empresa do visitante'
            label='Empresa'
            onChange={setCompany}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('RegisterPhoneScreen')}
        />
    )
}

export default RegisterCompanyScreen