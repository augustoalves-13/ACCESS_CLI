import MenuScreen from "../../../components/MenuScreen"
import CheckInVechile from '../../../../assets/images/vechile_checkin.png'
import CheckOutVechile from '../../../../assets/images/vechile_checkout.png'
import CheckIn from '../../../../assets/images/checkin.png'
import CheckOut from '../../../../assets/images/checkout.png'

const VechileGateMenuScreen = () => {
    const data = [
        { title: 'CHECK-IN VEICULOS', imgPath: CheckInVechile, navigate: 'CheckInVechile' },
        { title: 'CHECK-OUT VEICULOS', imgPath: CheckOutVechile, navigate: 'CheckOutVechile' },
        { title: 'CHECK-IN', imgPath: CheckIn, navigate: 'CheckInMenu' },
        { title: 'CHECK-OUT', imgPath: CheckOut, navigate: 'CheckOutMenu' },
    ]

    return (
        <MenuScreen
            data={data}
        />
    )
}

export default VechileGateMenuScreen