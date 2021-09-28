import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//history mantığı ile çalışır
const Stack = createNativeStackNavigator();

//pages
import Catagories from './pages/Catagories';
import Meals from './pages/Meals';
import MealDetails from './pages/MealDetails';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='CatagoriesPage' component={Catagories} />
        <Stack.Screen name='MealsPage' component={Meals} />
        <Stack.Screen name='MealDetailsPage' component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Router;
