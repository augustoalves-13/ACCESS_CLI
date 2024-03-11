import { useEffect } from "react"
import RegisterScreen from "../../../../components/RegisterScreen"
import { useNavigation } from "@react-navigation/native"

const DocumentCheckIn = ({route}) => {
    const navigation = useNavigation()
    const {document} = route.params

    useEffect(()=>{
        console.log(document , setNumericKeyboard())
    },[])

    
    const setNumericKeyboard = () => {
        if(document == 'PASSAPORTE'){
            return false
        } else {
            return true
        }
    }

    const navigator = (item) => {
        const typeMethod = item

        navigation.navigate('VisitorProfile', {typeMethod})
    }

    return(
        <RegisterScreen
            title={document}
            subTitle={`Informe o ${document} do visitante`}
            label={document}
            keyboardNumeric={setNumericKeyboard()}
            buttonTitle='Próximo'
            onPress={()=>navigator('Check-in')}
        />
    )
}

export default DocumentCheckIn