import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Container, ContentView } from "../styles/styles"
import { useNavigation } from "@react-navigation/native"
import { useEffect } from "react"
import UserSettings from "../userSettings"

const MenuScreen = ({ data, title }) => {

    const navigation = useNavigation()

    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <Container>
            <UserSettings/>
            <ContentView>

                <View style={{ width: "100%", gap: 30 }}>

                    <View style={styles.AccessBanner}>
                        {title 
                            ?
                            <Text style={{color: '#fcb803', fontSize: 40, fontWeight: '800'}}>{title}</Text>
                            :
                            <Image style={{ width: 200, objectFit: "contain" }} source={require('../../../assets/images/logoAccess.png')} />
                        }
                    </View>

                    <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap",paddingLeft : 10 ,justifyContent: "start", gap: 30 }}>



                        {
                            data.map(item => (
                                <TouchableOpacity
                                    style={styles.boxOption}
                                    onPress={() => navigation.navigate(item.navigate)}
                                >
                                    <Image style={{ height: "40%", objectFit: 'contain' }} source={item.imgPath} />
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                            )

                        }

                    </View>

                </View>
                <Image
                    style={{ width: 130, objectFit: "contain" }}
                    source={require('../../../assets/images/logoUget.png')}
                />
            </ContentView>
        </Container>
    )
}

const styles = StyleSheet.create({
    boxOption: {
        height: 130,
        width: "43%",
        borderRadius: 30,
        backgroundColor: '#FFF',
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    AccessBanner: {
        height: 130,
        width: "100%",
        borderColor: "#fcb803",
        borderWidth: 2,
        borderRadius: 80,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default MenuScreen