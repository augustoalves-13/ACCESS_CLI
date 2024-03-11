import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ForwardButton = (props) => {


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >

            <Text style={{ fontWeight: "700", color: "#fff" }}>{props.title}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 120,
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 20
    }
})

export default ForwardButton