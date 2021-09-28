import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';


//style
import styles from './MealsCard.style'

const MealsCard = ({ data, onSelected }) => {
    const onPress = () => {
        onSelected(data);
    }

    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{ uri: data.strMealThumb }} />
                <Text style={styles.title} numberOfLines={1}> {data.strMeal} </Text>
            </View>
        </TouchableHighlight>
    );
}

export default MealsCard;