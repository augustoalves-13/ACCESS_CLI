import { useNavigation } from "@react-navigation/native"
import ListScreen from "../../../components/ListScreen"

const ListReportsScreen = () => {

  const navigation = useNavigation()

  const data = [
    {title: 'VINCULADOS' , navigate: ()=>navigation.navigate('EntryReportsScreen')},
    {title: 'DESVINCULADOS', navigate:()=>navigation.navigate('ExitReportsScreen')},
  ]
  
  return(
    <ListScreen
      title='Relatórios'
      subTitle='Escolha o tipo de relatório'
      data={data}
    />
  )
}

export default ListReportsScreen