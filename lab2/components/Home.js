import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import style from '../style';

export default function Home({navigation}) {
    return (
        <View style={style.home.View}>
            <TouchableOpacity style={style.home.Button} onPress={() => navigation.navigate('HookUseState')} >
                <Text style={style.home.Text}>Hook Use State</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.home.Button}   onPress={() => navigation.navigate('RestParameters')} >
                <Text style={style.home.Text}>Rest Parameters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.home.Button}  onPress={() => navigation.navigate('SpreadOperator')} >
                <Text style={style.home.Text}>Spread Operator</Text>
            </TouchableOpacity>
        </View>
    );
}