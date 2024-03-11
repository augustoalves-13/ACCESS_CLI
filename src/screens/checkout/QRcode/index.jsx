import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import CameraPage from "../../../components/photo/camera"

const CheckOutQRcode = () => {

    const navigation = useNavigation()
    const typeMethod = 'Check-Out'

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('VisitorProfile', {typeMethod})
        },10000)
    },[])
    
    return(
        <CameraPage
        />    
    )
}

export default CheckOutQRcode