import { StyleSheet, Text, View } from "react-native"

const TitleScreens = (props) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={{ fontSize: 24, color: "#fff", fontWeight: 'bold' }}>{props.title}</Text>
            <Text style={{ fontSize: 16, color: '#fff' }}>{props.subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    titleContainer:{
        padding: 10,
        width:"90%",
        gap: 10,
    }

})


export default TitleScreens