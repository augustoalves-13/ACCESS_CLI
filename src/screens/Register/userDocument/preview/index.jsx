import { Image, View } from "react-native";

import UserSettings from "../../../../components/userSettings";
import { Container, ContentView } from "../../../../components/styles/styles";
import ButtonSet from "../../../../components/Buttons/ButtonSet";
import TitleScreens from "../../../../components/Title";
import { useNavigation } from "@react-navigation/native";


const DocumentPhotoPreview = ({ route , props}) => {
    const { photo } = route.params;

    const navigation = useNavigation()

    return (
        <Container>
            <UserSettings/>
            <ContentView>
                <TitleScreens
                    title='Cadastro'
                    subTitle='A foto ficou boa'
                />
                <Image source={{ uri: photo.uri }} style={{ width: '60%', height: "50%" , borderRadius: 30}} />
                <ButtonSet
                    onPress={()=>{navigation.navigate('RegisterNameScreen')}}
                    title='Próximo'
                />
            </ContentView>
        </Container>
    );
};

export default DocumentPhotoPreview
