import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{margin:20}} >Home Screen</Text>
        <Button 
        title="Go to Detail Screen"
        onPress={() => navigation.navigate('Details')}
        />
      </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{margin:20}} >Details Screen</Text>

        <Button 
        title="Go to Detail Screen screen again.."
        onPress={() => navigation.push('Details')}
        />
        <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
        />

        <Button 
        title="Go to Back"
        onPress={() => navigation.goBack()}
        />

        <Button 
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
        />
      </View>
  );
}


const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#58d68d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details ' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default App;

