import React ,{Component}  from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'


export default class TextInput extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            pickedDate: ""
        };
    }
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true});
    };

    hideDateTimePicker = (datetime) => {
        this.setState({ isDateTimePickerVisible: false});
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        const mdate = date.toString().split(" ");
        this.setState({
            pickedDate: mdate[1] + " " + mdate[2] + ", " + mdate[3]
        });
        this.hideDateTimePicker();
    };

    render(){
        return (
          <View style = {styles.DatePicker.homeContainer}>
              <View style = {styles.DatePicker.textContainer}>
                <Text style = {styles.DatePicker.text}>
                    {this.state.pickedDate}
                </Text>
              </View>
              <View style = {styles.DatePicker.homeContainer}>
                <Button style = {styles.DatePicker.button} title="Wybierz datę i godzinę" onPress={this.showDateTimePicker} />
                <DateTimePickerModal
                    isVisible={this.state.isDateTimePickerVisible}
                    mode={"datetime"}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    is24Hour={false}
                />
            </View>
          </View>

        );
      }
  }