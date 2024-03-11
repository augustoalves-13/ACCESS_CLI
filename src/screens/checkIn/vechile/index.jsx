import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const VechileCheckIn = () => {

  const navigation = useNavigation()

  const navigator = (item) => {
    const typeMethod = item

    navigation.navigate('VisitorProfile' , {typeMethod})
  }

  return(
    <RegisterScreen
      title='CheckIn'
      subTitle='Digite a placa do carro do visitante'
      label='Placa'
      buttonTitle='Próximo'
      onPress={()=>navigator('Check-In Vechile')}
    />
  )
}

export default VechileCheckIn