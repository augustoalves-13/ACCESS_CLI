import { useNavigation } from "@react-navigation/native"
import CameraPage from "../../../components/photo/camera"
import { useEffect } from "react"

const CheckOutCamera = () => {

    const navigation = useNavigation()
    const typeMethod = 'Check-Out'

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

export default CheckOutCamera