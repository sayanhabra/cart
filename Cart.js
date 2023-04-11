import { View, Text,TouchableOpacity ,FlatList,StyleSheet} from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
  const navigationHook = useNavigation();
  const noOfCartItem = useSelector(state => state);
  console.log(noOfCartItem.cart[0].name)
    // console.warn(cartItem){cartItem}
  return (
    
    <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      {/* <Text>Hello</Text>
      <Button title='go to products' onPress={()=>navigationHook.navigate('Products')}/> */}
      <FlatList
      data={noOfCartItem.cart}
      renderItem={({item})=>{
        return(
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>  Rs {item.price}</Text>
          </View>
        )
      }}
      />
    </View> 
    
  )
}

export default Cart;
const styles = StyleSheet.create({
  cartItem:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  }
})