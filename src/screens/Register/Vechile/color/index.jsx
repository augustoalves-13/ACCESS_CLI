import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterCarColorScreen = () => {
    const [color, setColor] = useState('')
    
    const navigation = useNavigation()

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite a cor do carro do visitante'
            label='Cor'
            onChange={setColor}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('ReasonVisitScreen')}
        />
    )
}

export default RegisterCarColorScreen