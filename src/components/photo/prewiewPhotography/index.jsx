import { Image, View } from "react-native";
import { Container, ContentView } from "../../styles/styles";
import UserSettings from "../../userSettings";
import TitleScreens from "../../Title";
import ButtonSet from "../../Buttons/ButtonSet";

const PhotoPreview = ({ route }) => {
    const { photo } = route.params;

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
                    title='Próximo'
                />
            </ContentView>
        </Container>
    );
};

export default PhotoPreview
