import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import style from '../style';

export default function SpreadOperator({navigation}) {
    return (
        <View style={style.sprdOp.View}>
            <Text style = {style.sprdOp.Text}>Spread syntax pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla wywołań funkcji) lub elementów (dla literałów tablicowych). Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).
            </Text>
            <View style = {style.sprdOp.Example}>
                <Text style = {style.sprdOp.TextExample}>{
                    `let arr = [1,2,3];
let arr2 = [4,5];
  
arr = [...arr,...arr2];
console.log(arr); // [ 1, 2, 3, 4, 5 ]`
                }</Text>
            </View>
            <View  style={style.sprdOp.Buttons}>
                <TouchableOpacity style={style.sprdOp.Button} onPress={() => navigation.navigate('HookUseState')} >
                    <Text>Hook Use State</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.sprdOp.Button} onPress={() => navigation.navigate('RestParameters')} >
                    <Text>Rest Parameters</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};