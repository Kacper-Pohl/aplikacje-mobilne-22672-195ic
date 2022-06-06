import React ,{Component}  from 'react';
import { View,Image, Text,Slider} from 'react-native';
import styles from '../styles';

export default class ResizeImageScreen extends Component {
    state = {
      firstImageScale: 1
    }
    resizeFirstImage = (value) => {
        this.setState({firstImageScale: value});
    }

    render(){
        return (
          <View style ={styles.resizableScreen.container}>
                <View style ={styles.resizableScreen.center}>
                    <Image  source={{ uri: "https://i.pinimg.com/originals/51/3f/79/513f79e98c5c21aa2afbdedd0f8ca345.jpg" }} style={[styles.screen.image, {transform: [{ scale: this.state.firstImageScale }]}]} />
                    <Slider
                        style={{width: 400, height: 250}}
                        value={1}
                        minimumValue={0.1}
                        maximumValue={2}
                        thumbTintColor='#FFFFFF'
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onValueChange={this.resizeFirstImage}
                    />
            </View>
          </View>
          
        );
      }
  }