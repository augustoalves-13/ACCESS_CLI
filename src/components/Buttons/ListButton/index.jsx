import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ListButton = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
            <Text style={{ fontWeight: '800', fontSize: 20 }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        height: 50,
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 20
    }
})

export default ListButton