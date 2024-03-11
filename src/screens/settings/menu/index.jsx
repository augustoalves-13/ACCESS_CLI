import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import TitleScreens from "../../../components/Title"
import { Container, ContentView } from "../../../components/styles/styles"
import UserSettings from "../../../components/userSettings"
import ButtonSet from "../../../components/Buttons/ButtonSet"
import ReturnButton from "../../../components/Buttons/ReturnButton"
import { useNavigation } from "@react-navigation/native"

const MenuSettingScreen = () => {

  const navigation = useNavigation()

  return (
    <Container>
      <UserSettings />
      <ContentView>

        <TitleScreens
          title='Administração'
          subTitle='Área de administrador'
        />

        <View style={{ width: '90%', alignItems: "center" }}>

          <TouchableOpacity onPress={()=>navigation.navigate('ListReportsScreen')} style={styles.buttonContainer}>
            <Image style={{ height: "40%", objectFit: 'contain' }} source={require('../../../../assets/images/Reports.png')} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Relatórios</Text>
          </TouchableOpacity>

        </View>

        <View>
          <ReturnButton />
          <Image style={{ width: 130, objectFit: "contain" }} source={require('../../../../assets/images/logoUget.png')} />
        </View>
      </ContentView>
    </Container>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 130,
    width: "43%",
    borderRadius: 30,
    backgroundColor: '#FFF',
    justifyContent: "space-evenly",
    alignItems: "center"
  }
})

export default MenuSettingScreen