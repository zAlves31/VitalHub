import { StatusBar } from 'expo-status-bar';
import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';

import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'react-native';

import * as MediaLibrary from 'expo-media-library'

export default function Camerabox() {
  const cameraRef= useRef(null)

  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [photo, setPhoto] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri)

      setOpenModal(true)
      console.log( photo)
    }
  }

  function ClearPhoto() {
    setPhoto(null)

    setOpenModal(false)
  }

  async function SavePhoto(){
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
      .then(() => {
        Alert.alert('Sucesso', 'foto salva na galeria')
      }).catch(erro => {
        alert("Error ao processar foto")
      })
    }
  }

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
    })();
  }, [])


  return (
    <View style={styles.container}>
      <Camera
      ref={cameraRef}
        type={cameraType}
        style={styles.camera}
        ratio={'16:9'}

      >
        <View style={styles.viewFlip}>
          <TouchableOpacity style={styles.bntFLip} onPress={() => setCameraType(cameraType == CameraType.front ? CameraType.back : CameraType.front)}>
            <Text style={styles.txtFlip}>Trocar</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      <TouchableOpacity style={styles.bntCapture} onPress={() => CapturePhoto()}>
        <FontAwesome name='camera' size={23} color={'#fff'}/>
      </TouchableOpacity>

      <Modal animationType='slide' transparent={false} visible={openModal}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30}}>
        <Image style={{width: '100%', height: 500, borderRadius: 10}} source={{uri: photo}}/>

        <View style={{margin: 15, flexDirection: 'row'}}>
          <TouchableOpacity 
            style={styles.btnCancel}
            onPress={() => ClearPhoto()}
          >
            <FontAwesome name='trash' size={35} color={'#ff0000'}/>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.btnUpload}
            onPress={() => SavePhoto()}
          >
            <FontAwesome name='save' size={35} color={'#121212'}/>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '80%',
    width: '100%'
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  bntFLip: {
    padding: 15
  },
  txtFlip: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  },
  bntCapture: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#121212',

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCancel: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },
  btnUpload: {
    margin: 20,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  }
});
