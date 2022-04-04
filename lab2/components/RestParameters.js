import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import style from '../style';

export default function RestParameters({navigation}) {
    return (
        <View style={style.restPar.View}>
            <Text style = {style.restPar.Text}>Rest parameter to ulepszony sposób obsługi parametrów funkcji, co pozwala nam łatwiej obsługiwać różne dane wejściowe jako parametry w funkcji. Składnia parametru rest pozwala nam reprezentować nieskończoną liczbę argumentów jako tablicę. Za pomocą parametru rest można wywołać funkcję z dowolną liczbą argumentów, bez względu na to, jak została zdefiniowana.
            </Text>
            <View style = {style.restPar.Example}>
                <Text style = {style.restPar.TextExample}>{
                    `function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); //3
console.log(fun(1,2,3)); //6
console.log(fun(1,2,3,4,5)); //15 `
                }</Text>
            </View>
            <View  style={style.restPar.Buttons}>
                <TouchableOpacity style={style.restPar.Button} onPress={() => navigation.navigate('HookUseState')} >
                    <Text>Hook Use State</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.restPar.Button} onPress={() => navigation.navigate('SpreadOperator')} >
                    <Text>Spread Operator</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};