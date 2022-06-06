import React, {Component} from 'react';
import { Button, Text,TextInput, View} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';


export default class AsyncStorageScreen extends Component {
  constructor(){
    super()
}
state = {
    Key:'',
    Value:'',
    readKey:''
}
storeData = async () => {
    var key = this.state.Key
    var value = this.state.Value
    await AsyncStorage.setItem(key,value);
    
};
retrieveData = async () => {
    var key = this.state.readKey
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
        alert('Klucz to:'+key+' Wartość to:'+value);
    }else{
        alert('Podany element nie istnieje');
    }

};
render(){ 
    return (
        <View style = {styles.asyncScreen.container} >
            <View >
                    <View >
                        <Text style = {styles.asyncScreen.text} >Podaj wartość do zapisania</Text>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({Key: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                        </View>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({Value: event.nativeEvent.text})}} placeholder="Wpisz wartość" />
                        </View>
                        <Button color='#475947'
                            title='Dodaj'
                            onPress={this.storeData}
                            
                        >
                        </Button>
                    </View>
                    <View >
                        <Text style = {styles.asyncScreen.text}  >Podaj klucz aby odczytać dane</Text>
                        <View style={styles.asyncScreen.input}>
                            <TextInput onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Podaj klucz" />
                        </View>
                        <Button color='#475947' title='Wyświetl' onPress={this.retrieveData}>
                        </Button>
                        
                    </View>
            </View>
        </View>
          )
        }
    }