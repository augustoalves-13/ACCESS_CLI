import { useNavigation } from "@react-navigation/native"
import ListScreen from "../../../components/ListScreen"

const TypeVisitorScreen = () => {

    const navigation = useNavigation()

    const createNavigation = (route) => {
        navigation.navigate(route)
    }

    const data = [
        {title: 'Visitante 1' , navigate: ()=>createNavigation('ChooseVechileScreen')},
        {title: 'Visitante 2' , navigate: ()=>createNavigation('ChooseVechileScreen')},
        {title: 'Visitante 3' , navigate: ()=>createNavigation('ChooseVechileScreen')},
        {title: 'Visitante 4' , navigate: ()=>createNavigation('ChooseVechileScreen')},
    ]
    
    
    return(
        <ListScreen
            title='Cadastro'
            subTitle='Selecione o tipo do visitante'
            data={data}
        />
    )
}

export default TypeVisitorScreen