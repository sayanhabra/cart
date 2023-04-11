
import Products from './Products';
import Cart from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 const AppNavigator=()=> {
  return (

    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} options={{headerShown:false}} /> 
        <Stack.Screen name="Cart" component={Cart} />   
     </Stack.Navigator> 
    </NavigationContainer>

   
  );
}
export default AppNavigator;