import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';


//style
import styles from './CatagoriesCard.style'

const CatagoriesCard = ({ data, onSelected }) => {
    const onPress = () => {
        onSelected(data);
    }

    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
                <Text style={styles.title}> {data.strCategory} </Text>
            </View>
        </TouchableHighlight>
    );
}

export default CatagoriesCard;