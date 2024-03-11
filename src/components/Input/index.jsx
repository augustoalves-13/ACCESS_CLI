import { useEffect, useRef } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const EntryInput = (props) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                autoFocus
                value={props.value}
                onChangeText={e => props.onChange(e)}
                keyboardType={props.numericKeyboard ? 'numeric' : 'default'}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
        width: "80%",
        gap: 10,
        marginBottom: 20
    },

    label: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 15,

    },

    input: {
        width: "100%",
        height: 45,
        backgroundColor: "#e5e5e5",
        paddingHorizontal: 10,
        borderRadius: 15
    }

})

export default EntryInput