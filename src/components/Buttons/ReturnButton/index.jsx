import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const ReturnButton = () => {
  
    const navigation = useNavigation()

    return(
        <TouchableOpacity style={styles.container} onPress={()=>navigation.goBack()}>

            <Text style={{fontWeight: '700', color: '#151515'}}>Voltar</Text>
        
        </TouchableOpacity>      
    )
}

export default ReturnButton

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 120,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 20
    }
})
