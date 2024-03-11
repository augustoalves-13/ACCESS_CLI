import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import { Container, ContentView } from "../styles/styles"
import TitleScreens from "../Title"
import ReturnButton from "../Buttons/ReturnButton"
import ListButton from "../Buttons/ListButton"
import UserSettings from "../userSettings"

const ListScreen = ({data, title, subTitle}) => {
    return (
        <Container>
            <UserSettings/>
            <ContentView>

                <TitleScreens
                    title={title}
                    subTitle={subTitle}
                />

                <View style={{ height: "55%" }}>

                    {
                        data.map((item) => (
                            <ListButton
                                onPress={item.navigate}
                                title={item.title}
                            />
                        ))
                    }

                </View>
                <View style={{gap: 0, alignItems: "center"}}>

                    <ReturnButton />

                    <Image style={{ width: 120, objectFit: "contain" }} source={require('../../../assets/images/logoUget.png')} />
                </View>
            </ContentView>
        </Container>
    )
}



export default ListScreen