import { useNavigation } from "@react-navigation/native"
import ListScreen from "../../../../components/ListScreen"

const ChooseAreaScreen = () => {

    const navigation = useNavigation()

    const typeMethod = 'Cadastro'

    const navigator = () => {
        navigation.navigate('CheckInRealized' , {typeMethod})
    }

    const data = [
        {title: 'Area 1' , navigate: ()=>navigator()},
        {title: 'Area 2' , navigate: ()=>navigator()},
        {title: 'Area 3' , navigate: ()=>navigator()},
        {title: 'Area 4' , navigate: ()=>navigator()},
    ]
    
    
    return(
        <ListScreen
            title='Cadastro'
            subTitle='Selecione a área correspondente'
            data={data}
        />
    )
}

export default ChooseAreaScreen