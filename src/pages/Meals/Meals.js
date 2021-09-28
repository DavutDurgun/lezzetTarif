import React from 'react';
import { SafeAreaView, Text, FlatList } from 'react-native';

//services
import useFetch from '../../hooks/useFetch/useFetch';

//components
import MealsCard from '../../components/Card/MealsCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error'

//style
import styles from './Meals.style';


const Meals = ({navigation, route }) => {
    const { error, isLoading, data } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + route.params.categoryName);

    const handleSelected = (item) => {
        navigation.navigate('MealDetailsPage', { idMeal: item.idMeal, });
    }

    //satırlar render ediliyor
    const MealsCardRender = ({ item }) => <MealsCard data={item} onSelected={handleSelected} />;

    const MealsCardKeyExtractor = (item) => item.idMeal;

    if (isLoading)
        return <Loading />;

    if (error)
        return <Error />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.meals || []}
                renderItem={MealsCardRender}
                keyExtractor={MealsCardKeyExtractor}
            />
        </SafeAreaView>
    );
}

export default Meals;