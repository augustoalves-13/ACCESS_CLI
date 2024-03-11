import { useNavigation } from "@react-navigation/native"
import CameraPage from "../../../components/photo/camera"
import { useEffect } from "react"

const CheckInCamera = () => {

    const navigation = useNavigation()
    const typeMethod = 'Check-in'

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('VisitorProfile', {typeMethod})
        },10000)
    },[])
    
    return(
        <CameraPage
            typeImage={true}
        />    
    )
}

export default CheckInCamera