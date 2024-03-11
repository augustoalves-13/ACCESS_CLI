import { useState } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const RegisterCarPlateScreen = () =>{
    const [plate, setPlate] = useState()
     
    const navigation = useNavigation()

    return(
        <RegisterScreen
            title='Cadastro'
            subTitle='Digite a placa do carro do visitante'
            label='Placa'
            onChange={setPlate}
            buttonTitle='Próximo'
            onPress={()=>navigation.navigate('RegisterCarModelScreen')}
        />
    )
}

export default RegisterCarPlateScreen