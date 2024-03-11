import { useNavigation } from "@react-navigation/native"
import ListScreen from "../../../../components/ListScreen"

const KindDocumentCheckOut = () => {

    const navigation = useNavigation()

    const navigator = (item) => {
        const document = item
        
        navigation.navigate('DocumentCheckOut' , {document})
    }

    const data = [
        {title:'CPF', navigate: ()=>navigator('CPF')},
        {title:'RG', navigate: ()=>navigator('RG')},
        {title:'PASSAPORTE', navigate: ()=>navigator('PASSAPORTE')},
        {title:'RNE', navigate: ()=>navigator('RNE')},
    ]
    
    return(
        <ListScreen
            title='Documento'
            subTitle='Escolha o tipo do documento'
            data={data}
        />
    )
}

export default KindDocumentCheckOut