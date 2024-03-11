import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterModelScreen = () =>{
    const [model, setModel] = useState()

    const navigation = useNavigation()

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite o modelo do carro do visitante'
            label='Modelo'
            onChange={setModel}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('RegisterCarColorScreen')}
        />
    )
}

export default RegisterModelScreen