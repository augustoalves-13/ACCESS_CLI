import { useNavigation } from "@react-navigation/native"
import ListScreen from "../../../../components/ListScreen"

const KindDocumentScreen = () => {
  const navigation = useNavigation()

  const data = [
    { title: 'CPF', navigate: () => navigation.navigate('RegisterCpfScreen') },
    { title: 'RG', navigate: () => navigation.navigate('RegisterRgScreen') },
    { title: 'PASSAPORTE', navigate: () => navigation.navigate('PASSAPORTE') },
    { title: 'RNE', navigate: () => navigation.navigate('RegisterRneScreen') },
  ]

  return (
    <ListScreen
      title='Documento'
      subTitle='Escolha o tipo do documento'
      data={data}
    />
  )
}

export default KindDocumentScreen