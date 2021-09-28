import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    inner_container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 4,
        resizeMode: 'cover'
    },
    title: {
        width: deviceSize.width,
        textAlign: 'right',
        position: 'absolute',
        bottom: 0,
        paddingVertical: 5,
        paddingHorizontal: 25,
        backgroundColor: '#22222277',
        fontSize: 26,
        fontWeight: '900',
        color: '#FFFFFF',
    }
});