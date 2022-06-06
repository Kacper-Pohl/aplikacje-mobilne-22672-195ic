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
            backgroundColor: '#475947',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 44,
            marginVertical: 18,
            borderRadius:30,
            shadowColor: "#000",
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
    styles.imageScreen = StyleSheet.create({
        text:{
            alignItems: 'center',
            color:'#93895d',
            fontSize:25,
            padding: 10
        },
        body:{
            flex:1,
            backgroundColor:'#000000',
            padding:2
        },
    });
    
    styles.connectionScrreen = StyleSheet.create({
        body: {
            flex: 1,
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#000000',
          },
          detail: {
            fontSize: 22,
            textAlign: 'center',
            margin:5,
            color:'#93895d',
          },
          title:{
              color: '#475947',
              fontSize:32,
            fontWeight:'bold',
            textAlign: 'center',
          }
    });
    styles.asyncScreen = StyleSheet.create({
        container:{
            backgroundColor:"#000000",
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            
        },
        text:{
            color:'#93895d',
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        input:{
            backgroundColor:"#8c8c8c",
            flexDirection: 'row',
            padding:5,
            margin:4,
        }
    });
    styles.syncScreen = StyleSheet.create({
        container: {

            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#c5c2c2",
            padding:1,
          },
        title:{
            fontSize:32,
            fontWeight:'bold',
            textAlign: 'center', 
        },
        context:{
            color: '#93895d',
            padding:8
        }
    });
    styles.lazyscreen = StyleSheet.create({
        body: {
            flex: 1,
            backgroundColor: '#000000',
          },
        container:{
            display:'flex',
            flexDirection:'column',
            width:'100%'
        },
        text:{
            color:'#93895d',
            fontSize:22,
            fontWeight:'bold',
            textAlign: 'center', 
            padding:2
        },
        textContainer:{
            alignItems: 'center',
            justifyContent: 'center'
        },
        icons:{
            backgroundColor:'#475947',
            flexDirection:'row',
            paddingHorizontal:'2%',
            width:'100%'
        }
    });
    styles.resizableScreen = StyleSheet.create({
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'#000000'
        },
        center:{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },

    });    
    styles.screen = StyleSheet.create({
        image: {
            width: 435, 
            height: 250,
        },
        container:{
            flex:1,
            alignSelf:'stretch',
            alignContent:'center',
            alignItems: 'center',
            backgroundColor:'white'
        },

    });
    export default styles