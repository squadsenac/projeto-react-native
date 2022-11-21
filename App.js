import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Fábio Cabral</Text>
      <Button title='Ir para imagem'
      onPress={() => navigation.navigate('Imagem')}
      />
    </View>
  );
}

function ImageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Férias dos sonhos</Text>
      <Image source={{uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/1c/swiss-alps.jpg?w=700&h=500&s=1'}}
       style={{width: 400, height: 400}} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Página de Fábio' }} />
        <Stack.Screen name="Imagem" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
