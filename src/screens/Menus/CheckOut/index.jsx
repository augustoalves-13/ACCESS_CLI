import MenuScreen from "../../../components/MenuScreen"
import qrCode from '../../../../assets/images/qr.png'
import document from '../../../../assets/images/document.png'
import face from '../../../../assets/images/Face.png'

const CheckOutMenu = () => {
    const data = [
        { title: 'QR CODE', imgPath: qrCode, navigate: 'CheckOutQRcode' },
        { title: 'CRACHÁ', imgPath: document, navigate: '' },
        { title: 'FACIAL', imgPath: face, navigate: 'CheckOutCamera' },
        { title: 'DOCUMENTO', imgPath: document, navigate: 'KindDocumentCheckOut' },
    ]

    return (
        <MenuScreen
            title='CHECK-OUT'
            data={data}
        />
    )
}
 
export default CheckOutMenu