import React from 'react';
import { View, Text, Image } from 'react-native';


//style
import styles from './CatagoriesCard.style'

const CatagoriesCard = ({ data }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
            <Text style={styles.title}> {data.strCategory} </Text>
        </View>
    );
}

export default CatagoriesCard;