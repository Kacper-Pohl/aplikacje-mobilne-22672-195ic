import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import style from '../style';

export default function Home({navigation}) {
    return (
        <View style={style.home.View}>
            <TouchableOpacity style={style.home.Button} onPress={() => navigation.navigate('Sort')} >
                <Text style={style.home.Text}>Filter Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.home.Button}   onPress={() => navigation.navigate('LazyLoad')} >
                <Text style={style.home.Text}>Lazy Loading</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.home.Button}  onPress={() => navigation.navigate('StepProg')} >
                <Text style={style.home.Text}>Step Progres</Text>
            </TouchableOpacity>
        </View>
    );
}