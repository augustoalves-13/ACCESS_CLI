import { useNavigation } from "@react-navigation/native"
import RegisterScreen from "../../../components/RegisterScreen"

const VechileCheckOut = () => {

  const navigation = useNavigation()

  const navigator = (item) => {
    const typeMethod = item

    navigation.navigate('VisitorProfile' , {typeMethod})
  }

  return(
    <RegisterScreen
      title='CheckOut'
      subTitle='Digite a placa do carro do visitante'
      label='Placa'
      buttonTitle='Próximo'
      onPress={()=>navigator('Check-Out Vechile')}
    />
  )
}

export default VechileCheckOut