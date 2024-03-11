import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import TitleScreens from "../../../components/Title"
import { Container, ContentView } from "../../../components/styles/styles"
import UserSettings from "../../../components/userSettings"
import ButtonSet from "../../../components/Buttons/ButtonSet"
import { useState } from "react"
import EntryInput from "../../../components/Input"
import { useNavigation } from "@react-navigation/native"

const InitalAdm = () => {
  const [modalVisibily, setModalVisibily] = useState(false)
  const navigation = useNavigation()

  return (
    <Container>
      <UserSettings />
      <ContentView>

        <TitleScreens
          title='Administração (ADM)'
          subTitle='Área de administrador'
        />

        <Image style={{ width: '80%', height: '50%', objectFit: 'contain' }} source={require('../../../../assets/images/cord_card.png')} />

        <ButtonSet
          onPress={() => setModalVisibily(true)}
          title='Senha'
        />
      </ContentView>
      {modalVisibily &&
        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>

            <View>
              <Text>Informe a senha de administração</Text>
              <TextInput
                style={styles.input}
              />
            </View>
            <View style={{flexDirection: "row", gap:10}}>

              <TouchableOpacity           onPress={() => setModalVisibily(false)} style={[styles.btn, styles.backButton]}>
                <Text style={{color:'#fff', fontWeight:'800'}}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>navigation.navigate('MenuSettings')} style={[styles.btn, styles.nextButton]}>
                <Text style={{color:'#151515', fontWeight:'800'}}>Próximo</Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>
      }
    </Container>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#00000071',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalContent: {
    height: '40%',
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 20,
    gap: 40,
    justifyContent: 'flex-end'
  },

  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 10,
    borderRadius: 15
  },

  btn: {
    height: 40,
    width: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  backButton: {
    backgroundColor: '#151515',
    borderRadius: 30,
  },

  nextButton: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#151515',
    borderStyle: "solid"
  }
})

export default InitalAdm