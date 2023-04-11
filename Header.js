import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './CartSlicer'
import { useNavigation } from '@react-navigation/native';



const Header =({cartValue})=>{
    const navigationHook = useNavigation();
    return(
        <View style={{flexDirection:'row',height:70,backgroundColor:'lightblue',width:'100%',alignItems:'center',justifyContent:'space-evenly'}}>
            <View style={{width:'75%'}}><Text>Shopping App</Text></View>
            <TouchableOpacity style={styles.cart} onPress={()=>navigationHook.navigate('Cart')}>
                <View>
                    <Text style={{fontSize:25,fontWeight:'bold'}}>{cartValue.length}</Text>
                </View>
            </TouchableOpacity>
            {/* <Cart cartItem={cartValue}/> */}
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
   
    cart:{
        backgroundColor:'brown',height:45,width:45,justifyContent:'center',alignItems:'center',
    }

})