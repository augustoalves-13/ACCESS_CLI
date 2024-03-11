import { StyleSheet, Text, View } from "react-native"
import { Container, ContentView } from "../styles/styles"
import EntryInput from "../Input"
import ButtonSet from "../Buttons/ButtonSet"
import { useState } from "react"
import TitleScreens from "../Title"
import UserSettings from "../userSettings"

const RegisterScreen = (props) => {

    return(
        <Container>
            <UserSettings/>
            <ContentView>

                <View style={{width: "100%", alignItems: "center", gap: 20}}>

                    <TitleScreens
                        title={props.title}
                        subTitle={props.subTitle}
                    />                    

                    <EntryInput
                        value={props.value}
                        label={props.label}
                        onChange={props.onChange}
                        numericKeyboard={props.keyboardNumeric}

                    />

                </View>

                <ButtonSet
                    title={props.buttonTitle}
                    onPress={props.onPress}
                />
                
            </ContentView>
        </Container>
    )
}


export default RegisterScreen