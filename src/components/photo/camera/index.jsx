import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import { RNCamera } from 'react-native-camera';
import { Container } from '../../styles/styles';
import ReturnButton from '../../Buttons/ReturnButton';
import { useNavigation } from '@react-navigation/native';

const CameraPage = ({ typeImage, navigate }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const cameraRef = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await RNCamera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            navigation.navigate(navigate, { photo: data.uri });
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Container>
            <View style={styles.container}>
                <View style={styles.camContainer}>
                    <RNCamera
                        ref={cameraRef}
                        style={styles.camera}
                        type={RNCamera.Constants.Type.back}
                        captureAudio={false}
                    />
                </View>
                {typeImage && (
                    <Image
                        style={styles.camMask}
                        source={require('../../../../assets/images/maskCam.png')}
                    />
                )}
                <TouchableOpacity style={styles.btn} onPress={takePicture} />
                <View>
                    <ReturnButton />
                    <Image
                        style={{ width: 120, height: 50, resizeMode: 'contain' }}
                        source={require('../../../../assets/images/logoUget.png')}
                    />
                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        backgroundColor: '#151515',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    camContainer: {
        width: '90%',
        height: '75%',
        position: 'absolute',
        overflow: 'hidden',
        borderRadius: 70,
        top: 20,
    },
    camMask: {
        height: '90%',
        width: '90%',
        resizeMode: 'contain',
        position: 'absolute',
        top: -30,
    },
    btn: {
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        top: '65%',
    },
});

export default CameraPage;
