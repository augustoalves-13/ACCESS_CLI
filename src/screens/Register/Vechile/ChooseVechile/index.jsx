import { Image, View } from "react-native"
import { Container, ContentView } from "../../../../components/styles/styles"
import TitleScreens from "../../../../components/Title"
import ReturnButton from "../../../../components/Buttons/ReturnButton"
import ListButton from "../../../../components/Buttons/ListButton"
import { useNavigation } from "@react-navigation/native"

const ChooseVechile = () => {

    const navigation = useNavigation()

    return (
        <Container>
            <View></View>
            <ContentView>
                <TitleScreens
                    title='Cadastro'
                    subTitle='O visitante entrará de carro'
                />

                <Image style={{width: "50%" , height: "35%" , objectFit: "contain"}} source={require('../../../../../assets/images/car.png')} />

                <ListButton
                    title='Sim'
                    onPress={() => navigation.navigate('RegisterCarPlateScreen')}
                />

                <ListButton
                    title='Não'
                    onPress={() => navigation.navigate('ReasonVisitScreen')}
                />

                <View>
                    <ReturnButton />

                    <Image style={{ width: 130, objectFit: "contain" }} source={require('../../../../../assets/images/logoUget.png')} />
                </View>

            </ContentView>
        </Container>
    )
}

export default ChooseVechile