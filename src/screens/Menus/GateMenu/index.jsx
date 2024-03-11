import MenuScreen from "../../../components/MenuScreen"
import CadastroBanner from '../../../../assets/images/CadastroBanner.png'
import CheckIn from '../../../../assets/images/checkin.png'
import CheckOut from '../../../../assets/images/checkout.png'

const GateMenuScreen = () => {

  const data = [
    { title: 'CHECK-IN', imgPath: CheckIn, navigate: 'CheckInMenu' },
    { title: 'CHECK-OUT', imgPath: CheckOut, navigate: 'CheckOutMenu' },
    { title: 'CADASTRAR', imgPath: CadastroBanner, navigate: 'TermsScreen' },
  ]

  return (
    <MenuScreen
      data={data}
    />
  )
}

export default GateMenuScreen