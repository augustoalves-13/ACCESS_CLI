import { Image, View } from "react-native"
import ForwardButton from "../ForwardButton"
import ReturnButton from "../ReturnButton"

const ButtonSet = (props) => {

    return (
        <View style={{gap: 0, alignItems: "center"}}>

            <View style={{flexDirection: "row", gap: 40,}}>

                <ReturnButton />

                
                <ForwardButton 
                    onPress={props.onPress}
                    title={props.title}
                />

            </View>
            <Image style={{width: 130, objectFit: "contain"}} source={require('../../../../assets/images/logoUget.png')} />
        </View>
    )
}

export default ButtonSet