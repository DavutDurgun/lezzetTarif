import { StyleSheet, Dimensions } from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 2,
    },
    inner_container: {
        margin:10,
        backgroundColor: '#22222211',
        paddingVertical: 10,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    },
    title: {
        paddingHorizontal: 8,
        fontSize: 24,
        borderBottomWidth: 1,
        padding:5,
        marginBottom:15,
    },
    description: { 
        textAlign:'justify',
        paddingHorizontal: 8,
        fontSize: 18,
    },
    button:{
        padding:12,
        margin:10,
        textAlign:'center',
        backgroundColor: 'red',
        fontSize:22,
        fontWeight:'900',
        color: 'white',
        borderRadius:8,
    }
});