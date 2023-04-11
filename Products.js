import { View, Text, FlatList ,StyleSheet} from 'react-native'
import React, { useEffect,useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from './CartSlicer'
import Header from './Header'
import { useNavigation } from '@react-navigation/native';




const Products = ({navigation}) => {

    const data=[{"id":0,"name":"iPhone 6S","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":799},
         {"id":1,"name":"iPhone 5S","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":349},
         {"id":2,"name":"Macbook","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":1499},
         {"id":3,"name":"Macbook Air","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":999},
         {"id":4,"name":"Macbook Air 2013","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":599},
         {"id":5,"name":"Macbook Air 2012","description":"Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.","imageUrl":"https://www.pexels.com/photo/two-red-flowers-in-a-vase-standing-on-a-bed-in-sunlight-13488940/","price":499}
        ]
const noOfItem = useSelector(state => state)
const dispatch = useDispatch()
  return (
    <View>
        <Header cartValue={noOfItem.cart}/>
      <FlatList data={data}
      keyExtractor={item => item.id}
      renderItem={({item})=>{
        return(
            // <TouchableOpacity  onPress={() => navigation.navigate('Cart')}>
            <View style={styles.itemView}>
                <Text style={{fontSize:25,paddingTop:2}}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style={{fontSize:20,padding:3}}>{'Rs '+ item.price}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => dispatch(addItem(item))}><Text>Add To Cart</Text></TouchableOpacity>
                
            </View>
            // </TouchableOpacity>
        )
      }}
      />
     
    </View>
  )
}

export default Products
const styles = StyleSheet.create({
    itemView:{
        height:150,
        width:'100%',
        backgroundColor:'#fff',
        // flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center',
    },
    img:{
        height:50,
        width:50,
    },
    btn:{
        fontWeight:'bold',
        fontSize:30,
        backgroundColor:'blue',
        height:25,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        
    },
    cart:{
        backgroundColor:'brown',height:45,width:45,justifyContent:'center',alignItems:'center',
    }

})