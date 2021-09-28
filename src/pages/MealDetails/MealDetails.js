import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, Linking } from 'react-native';


//services
import useFetch from '../../hooks/useFetch/useFetch';

//components
import Loading from '../../components/Loading';
import Error from '../../components/Error'

//style
import styles from './MealDetails.style'

const MealDetails = ({ route }) => {
    const { error, isLoading, data } = useFetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + route.params.idMeal);

    if (isLoading)
        return <Loading />;

    if (error)
        return <Error />;

    return (
        <SafeAreaView style={styles.container}>
            {data.meals &&
                <ScrollView>
                    <Image
                        style={styles.image}
                        source={{ uri: data.meals[0].strMealThumb || null }}
                    />
                    <View style={styles.inner_container}>
                        <Text style={styles.title}>
                            {data.meals[0].strMeal}

                        </Text>
                        <Text style={styles.description}>
                            {data.meals[0].strInstructions}
                        </Text>


                        <TouchableOpacity onPress={() => { Linking.openURL(data.meals[0].strYoutube) }}>
                            <Text style={styles.button}> Youtube 'tan İzle</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            }
        </SafeAreaView>
    );
}

export default MealDetails;