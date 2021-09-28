import React, { useState } from 'react';
import { SafeAreaView, FlatList, } from 'react-native';

//components
import CatagoriesCard from '../../components/Card/CatagoriesCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

//style
import styles from './Catagories.style';

//services
import useFetch from '../../hooks/useFetch/useFetch';

const Catagories = ({ navigation }) => {
    const { error, isLoading, data } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');

    const handleSelected = (item) => {
        navigation.navigate('MealsPage', { categoryName: item.strCategory, });
    }

    //satırlar render ediliyor
    const CatagoriesCardRender = ({ item }) => <CatagoriesCard data={item} onSelected={handleSelected} />;

    const CatagoriesCarKeyExtractor = (item) => item.idCategory;

    if (isLoading)
        return <Loading />;

    if (error)
        return <Error />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.categories || []}
                renderItem={CatagoriesCardRender}
                keyExtractor={CatagoriesCarKeyExtractor}
            />
        </SafeAreaView>
    );
}

export default Catagories;