import MenuScreen from "../../../components/MenuScreen"
import qrCode from '../../../../assets/images/qr.png'
import document from '../../../../assets/images/document.png'
import face from '../../../../assets/images/Face.png'

const CheckInMenu = () => {
    const data = [
        { title: 'QR CODE', imgPath: qrCode, navigate: 'CheckInQRcode' },
        { title: 'CRACHÁ', imgPath: document, navigate: '' },
        { title: 'FACIAL', imgPath: face, navigate: 'CheckInCamera' },
        { title: 'DOCUMENTO', imgPath: document, navigate: 'KindDocumentCheckIn' },
    ]

    return (
        <MenuScreen
            title='CHECK-IN'
            data={data}
        />
    )
}

export default CheckInMenu