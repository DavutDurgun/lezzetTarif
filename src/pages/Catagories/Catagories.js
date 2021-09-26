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

const Catagories = () => {
    const { error, isLoading, data } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');


    //satırlar render ediliyor
    const CatagoriesCardRender = ({ item }) => <CatagoriesCard data={item} />;

    const CatagoriesCarKeyExtracor = (item) => item.idCategory;

    if (isLoading)
        return <Loading />;

    if (error)
        return <Error />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={CatagoriesCardRender}
                keyExtractor={CatagoriesCarKeyExtracor}
            />
        </SafeAreaView>
    );
}

export default Catagories;