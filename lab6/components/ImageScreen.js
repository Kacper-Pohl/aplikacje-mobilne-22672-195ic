import React ,{Component}  from 'react';
import { View,Image, Text} from 'react-native';
import img from '../assets/happy-guard.jpg';
import styles from '../styles';

export default class ImageScreen extends Component {
    render(){
        return (
            <View style={styles.imageScreen.body}>

                <Text style={styles.imageScreen.text}>Loaded from assets</Text>
                <Image style={styles.screen.image} source={img}/>

                <Text style={styles.imageScreen.text}>Loaded from URI</Text>
                <Image
                    source={{uri: "https://static.wikia.nocookie.net/warhammer40k/images/9/9a/Img001.jpg/revision/latest?cb=20120923073030"}}
                    style={styles.screen.image}/>

            </View>
          
        );
      }
  }