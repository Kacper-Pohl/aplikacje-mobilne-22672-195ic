import { StyleSheet } from 'react-native';

const styles = {}
    styles.home = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#000',
        },
        homeButton: {
            flex: 1,
            backgroundColor: '#ef9b9b',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 54,
            marginVertical: 46,
            borderRadius:15,
            shadowColor: "#f6f6f6",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
        },
        homeText: {
            fontSize: 25,
        },

    });
    styles.PickerSelect = StyleSheet.create({
        pickerContainer: {
            alignItems: "center",
            padding: 6,
            height: 340,
            marginTop:10,
            marginLeft:30,
        },
        selectContainer:{
            width: 300,
            padding: 20,
        },
        selectionContainer: {
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            marginTop: 10,
            marginRight: 10,
        },
        container:{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#FFF',
            
        },
        selection: {
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold"
        },
        pickerLabel: {
            fontSize: 20,
            fontWeight: "bold"
        },
    });
    styles.Toast = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            padding:2,
        },
        modalContainer: {
            padding:10,
            paddingTop:10
        },
        modalText:{
            padding:3,
            paddingBottom:10,
            fontSize:40,
            textAlign:'center'
        },
        text:{
            fontSize:15,
            padding:1,
        },

    });
    styles.SwitchScr = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#FFF',  
          },
        modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
          },
          button: {
            borderRadius: 20,
            padding: 15,
            elevation: 2,
            backgroundColor: "#2196F3",
          },
            
          textStyle: {
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 25,
          },
          modalText: {
            marginBottom: 15,
            textAlign: "center",
            fontSize: 80,
          }
    });
    styles.TextInput = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#FFF',
        },
        title: {
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:10
        },
        titleText: {
            color:'#000',
            fontSize:30,
        },
        text: {
            fontWeight:'bold',
            fontSize:15,
        },
        input: {
            backgroundColor: '#ddd',
            marginVertical:'2%',
            padding:'3%',
        }
    });
    styles.DatePicker = StyleSheet.create({
        homeContainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#A8A8A8',
            textAlignVertical : "center",
            paddingTop:100,
            paddingBottom:100
        },
        textContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#90cbca',
            textAlignVertical : "center",
            borderRadius:30,
            paddingTop:100,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 10,
        },
        text:{
            color:"#000",
            fontSize: 35,
            marginTop: 0,
                    width: 250,
                    height: 150,
            alignItems: 'center',
            justifyContent: 'center',
            
        }
    });

  

export default styles