import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import TitleScreens from "../Title"
import { Container, ContentView } from "../styles/styles"
import UserSettings from "../userSettings"
import ReturnButton from "../Buttons/ReturnButton"

const ReportsScreen = ({ data, typeReports, vechile }) => {
  return (
    <Container>
      <UserSettings />
      <ContentView>
        <TitleScreens
          title={vechile ? 'Relatórios - Veículo' : 'Relatórios'}
          subTitle={`${typeReports} 18/08 - 12:00 - 22:00`}
        />

        <TextInput
          placeholder={vechile ? 'Busque aqui pela placa' : 'Busque aqui pelo nome'}
          style={styles.input}
        />

        <ScrollView>
          {
            data.map(item => (
              <View style={styles.container}>
                <View style={[styles.radius, { backgroundColor: item.color }]}></View>
                <View style={styles.txtContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.txt}>{item.text}</Text>
                </View>
                <View style={styles.txtData}>
                  <Text style={styles.txt}>{item.date}</Text>
                  <Text style={[styles.txt, { textAlign: 'center' }]}>{item.hour}</Text>
                </View>
              </View>
            ))

          }
        </ScrollView>
        <View>
          <ReturnButton />
          <Image style={{ width: 130, objectFit: "contain" }} source={require('../../../assets/images/logoUget.png')} />
        </View>
      </ContentView>
    </Container>
  )
}

const styles = StyleSheet.create({

  input: {
    height: 50,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 30
  },

  container: {
    marginBottom: 10,
    backgroundColor: '#F5F5F7',
    height: 60,
    width: 290,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 20,
    alignItems: "center",
  },

  radius: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: 30,
    width: 30,
  },

  txtContainer: {
    width: '40%'
  },

  txtData: {
    width: '30%',
    textAlign: "right"
  },

  title: {
    color: '#9B9B9B',
    fontWeight: "bold",
    fontSize: 16,
  },

  txt: {
    color: '#9B9B9B',
    fontWeight: "bold",
    fontSize: 13,
  }

})

export default ReportsScreen