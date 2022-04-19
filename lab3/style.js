import { StyleSheet } from 'react-native';

const style ={}
style.home = StyleSheet.create({
    View: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#383838',
    },
    Button: {
        flex: 1,
        backgroundColor: '#ce00ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 54,
        marginVertical: 46,
        borderRadius:30,
    },
    Text: {
        fontSize: 25,
    },

})
style.sort=StyleSheet.create ({
    View: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Button: {
        flex: 1,
        backgroundColor: '#d92222',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        marginVertical: 10,
        paddingVertical: 16,
        borderRadius:30,
        elevation: 10,
    },
    Buttons: {
        flexDirection: 'row',
    },
    Text: {
        fontSize: 20,
    },
    TextExample: {
        color:'#bbb',
        fontSize:14,
    },
    Example: {
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 24,
    },
})
style.lazy=StyleSheet.create ({
    View: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Button: {
        flex: 1,
        backgroundColor: '#4f60ef',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        marginVertical: 10,
        paddingVertical: 16,
        borderRadius:30,
        elevation: 10,
    },
    Buttons: {
        flexDirection: 'row',
    },
    Text: {
        fontSize: 20,
    },
    TextExample: {
        color:'#bbb',
        fontSize:14,
    },
    Example: {
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 24,
    },
})
style.step=StyleSheet.create ({
    View: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        textAlign : 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    Button: {
        flex: 1,
        backgroundColor: '#2ece2f',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
        marginVertical: 10,
        paddingVertical: 16,
        borderRadius:30,
        elevation: 10,
    },
    Buttons: {
        flexDirection: 'row',
    },
    Text: {
        fontSize: 20,
    },
    TextExample: {
        color:'#bbb',
        fontSize:14,
    },
    Example: {
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 24,
    },
    Container: {
        flex: 1,
        justifyContent: "center"
    },
    Horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        margin: 30
    }
})

export default style