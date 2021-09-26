import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal:10,
        marginVertical:5,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius:7,
        borderBottomRightRadius:7,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'#fff'
    },
    image: {
        marginLeft: 5,
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 22,
    }
});