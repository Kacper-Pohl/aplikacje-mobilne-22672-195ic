import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from '../style';
const Lista = ({ tablica }) => {
    var i = 0
    return (
        <ScrollView >
            {tablica.map(liczba => <Text style = {style.sort.Example} key={i++} >{liczba}</Text>)}
        </ScrollView>
    );
};

export default class FilterSort extends Component {
    constructor() {
        super();
        const tab = [];

        for (let i = 0; i < 100; i++) {
            tab.push(Math.floor(Math.random() * 1000)+1);
        }

        this.state = { tab };
    }

    sortowanie = () =>{
        this.state.tab.sort((a,b) => a > b ? 1:-1)
        this.forceUpdate()
    }
    render(){
        return (
            <View style = {style.sort.View}>
                <Text style = {style.sort.Text}>100 pseudolosowych liczb w przedziale 0 - 1000</Text>
                <View style={style.sort.Buttons}>
                    <TouchableOpacity style={style.sort.Button} onPress={this.sortowanie}>
                        <Text >Sortuj</Text>
                    </TouchableOpacity>
                </View>
                <View  style = {style.sort.View} >
                    <Lista  tablica={this.state.tab} />
                </View>
            </View>

        );
    }
}