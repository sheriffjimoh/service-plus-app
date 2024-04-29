
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/bottom-tabs';
import BookmarkScreen from '../screens/bookmark';

const Stack = createStackNavigator();
export default function MainStack() {
  return (
   
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen  name="Bookmarks" component={BookmarkScreen} />
        </Stack.Navigator>
   
  );
}