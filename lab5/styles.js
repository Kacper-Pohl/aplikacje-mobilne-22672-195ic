import { StyleSheet } from 'react-native';

const styles = {}
    
    styles.home = StyleSheet.create({
        homeContainer: {
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            backgroundColor: '#5e5e5e',
        },
        homeButton: {
            flex: 1,
            backgroundColor: '#997f9f',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 54,
            marginVertical: 46,
            borderRadius:30,
            shadowColor: "#402548",
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
    styles.firstScreen = StyleSheet.create({
        scrolView: {
            alignContent:'center',
            flexDirection: 'column',
            alignItems: 'baseline',
        },
        viewBox:{
            width: 300,
            height: 128,
        }
    });
    styles.secondScreen = StyleSheet.create({
        scrolView: {
            alignContent:'space-around',
            flexDirection: 'column',
        },
        viewBox:{
            alignSelf:'center',
            width: 100,
            height: 128,
        }
    });
    styles.touchableScreen = StyleSheet.create({
        container: {
            color: "#000000",
            flex: 1,
            paddingTop: 80,
            backgroundColor:'#b4b4b4'
        },
        button:{
            borderRadius:20,
            backgroundColor:"#444444",
            paddingHorizontal:'10%',
            paddingVertical:'5%',
            margin:'5%', 
        },
        firstContainer:{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor:"#d92222",
        },
        secondContainer:{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor:"#4f60ef",
        },
        textButton:{
            fontSize:20,
            color: "#b9b9b9",
            textAlign:'center'
        },
        text:{
            paddingTop:20,
            fontSize:30,
            textAlign:'center'
        }
    });
    styles.swipeScreen = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 80,
          },
          listItem: {
            height: 90,
            alignItems: 'center',
            justifyContent: 'center'
          },
          leftSwipeItem: {
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingRight: 20
          },
          text:{
              paddingTop:20,
              fontSize:30,
              textAlign:'center'
          }
    });
    
    export default styles