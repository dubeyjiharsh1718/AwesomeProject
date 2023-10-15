import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.camera = null;
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        />
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={this.takePicture}
        >
          <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
            Take Picture
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CameraScreen;
