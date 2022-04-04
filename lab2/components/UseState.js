import * as React from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import style from '../style';

export default function UseStt({navigation}) {
    return (
        <View style={style.useStt.View}>
            <Text style = {style.useStt.Text}>
                UseState Hook. Hook jest specjalną funkcją, która pozwala „zahaczyć się” w wewnętrzne mechanizmy Reacta a UseState jest właśnie hookiem który deklaryje "zmienną stanu" i pozwala nam korzystać ze stanu w komponencie funkcyjnym przez co możemy zmienić stan naszego komponentu.
            </Text>
            <View style = {style.useStt.Example}>
                <Text style = {style.useStt.TextExample}>{
                    `import React, { useState } from 'react';
 function Example() {
   const [count, setCount] = useState(0);
   return (
      <div>
        <p>Kliknięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>
         Kliknij mnie
        </button>
      </div>
    );
  }`
                }</Text>
            </View>
            <View style={style.useStt.Buttons}>
                <TouchableOpacity style={style.useStt.Button}  onPress={() => navigation.navigate('RestParameters')} >
                    <Text>Rest Parameters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.useStt.Button} onPress={() => navigation.navigate('SpreadOperator')} >
                    <Text>Spread Operator</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};