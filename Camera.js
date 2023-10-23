import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, PermissionsAndroid } from 'react-native';
import { RNCamera } from 'react-native-camera';
import RNFS from 'react-native-fs';

const Camera = () => {
  const camera = useRef(null);

  const takePicture = async () => {
    if (camera.current) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);

      if (Platform.OS === 'android') {
        await requestWritePermission();
      }

      const fileName = `${Date.now()}.jpg`;
      const path = `${RNFS.CachesDirectoryPath}/${fileName}`;

      RNFS.moveFile(data.uri, path)
        .then(() => {
          if (Platform.OS === 'ios') {
            CameraRoll.saveToCameraRoll(path, 'photo');
          }
          console.log(`Image saved to gallery: ${path}`);
        })
        .catch((error) => {
          console.error('Error saving image to gallery:', error);
        });
    }
  };

  const requestWritePermission = async () => {
    if (Platform.Version >= 23) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Write permission granted');
        } else {
          console.warn('Write permission denied');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={camera}
        style={styles.preview}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.capture} onPress={takePicture}>
          <Text style={{ fontSize: 14 }}>Capture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default Camera;
