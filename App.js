
import Products from './Products';
import AppNavigator from './AppNavigator';
import { store } from './Store'
import { Provider } from 'react-redux'

export default function App() {
  return (

    <Provider store={store}>
      <AppNavigator/>
    {/* <Products/> */}
    
    </Provider>

   
  );
}

