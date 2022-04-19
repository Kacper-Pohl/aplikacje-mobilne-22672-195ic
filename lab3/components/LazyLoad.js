import React ,{Component ,Suspense}  from 'react';
import { View, Text} from 'react-native';
import style from '../style';

const Lazy = React.lazy(() => import('./ToLoad'))

export default class LazyLoading extends Component {
    render(){
        return (
            <View style = {style.lazy.View}>
                <Text style = {style.lazy.Text}>Lazy Loading</Text>
                <View style = {style.lazy.Example}>
                    <Suspense fallback={<Text>Loading...</Text>}>
                        <Lazy length="100000"/>
                    </Suspense>
                </View>
            </View>
        );
    }
}