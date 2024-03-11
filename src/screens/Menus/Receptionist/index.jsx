import MenuScreen from "../../../components/MenuScreen"
import CadastroBanner from '../../../../assets/images/CadastroBanner.png'
import DesvincularBanner from '../../../../assets/images/DesvincularBanner.png'

const ReceptionistMenuScreen = () => {
    const data = [
        { title: 'CADASTRAR', imgPath: CadastroBanner, navigate: 'TermsScreen' },
        { title: 'DESVINCULAR', imgPath: DesvincularBanner, navigate: '' },
    ]

    return (
        <MenuScreen
            data={data}
        />
    )
}

export default ReceptionistMenuScreen