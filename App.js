import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inventory from './src/pages/Inventory_Display';
import Form from './src/pages/Form';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
    headerShown: false,
  }}>
            <Stack.Screen name="Form"  options={{ title: 'Form' }} component={Form} />
        <Stack.Screen  name="Home"  options={{ title: 'Inventory' }} component={Inventory} />
      </Stack.Navigator>
    </NavigationContainer></Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
