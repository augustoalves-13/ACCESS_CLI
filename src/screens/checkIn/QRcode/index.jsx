import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import CameraPage from "../../../components/photo/camera"

const CheckInQRcode = () => {

    const navigation = useNavigation()
    const typeMethod = 'Check-in'

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

export default CheckInQRcode