import { View, Text, Image, TextInput, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { AntDesign } from '@expo/vector-icons'
import gStyles from '../../style'
import Colors from '../Constants/colors'
import {useNavigation} from "@react-navigation/native"

const HomeScreen = () => {
  const navigation = useNavigation()
  const bannerData = [require('../Assets/Images/banner.jpg')]
  const [categories, setCategories] = useState([{
    id: 1,
    title: 'Mobile',
    image: require('../Assets/Images/phone.png'),
  },
  {
    id: 2,
    title: 'Fashion',
    image: require('../Assets/Images/woman.png'),
  },
  {
    id: 3,
    title: 'Furrniture',
    image: require('../Assets/Images/sofa.png'),
  },
  {
    id: 4,
    title: 'Travel',
    image: require('../Assets/Images/plane.png'),
  },
  {
    id: 5,
    title: 'Toys',
    image: require('../Assets/Images/toys.png'),
  }
  ])

  const [products, setProducts] = useState([{
    id: 1,
    title: 'Mobile Phone 1',
    description: "this is mobile phone description",
    category: 'mobile',
    image: require('../Assets/Images/pic1.webp'),
    price:300,

  },
  {
    id: 2,
    title: 'Mobile Phone 2',
    description: "this is mobile phone description",
    category: 'mobile',
    image: require('../Assets/Images/pic2.webp'),
    price:350,
  },
  {
    id: 3,
    title: 'Mobile Phone 3',
    description: "this is mobile phone description",
    category: 'mobile',
    image: require('../Assets/Images/pic3.webp'),
    price:380,
  },
  {
    id: 4,
    title: 'Furniture 1',
    description: "this is Furniture description",
    category: 'furniture',
    image: require('../Assets/Images/pic4.webp'),
    price:380,
  },
  {
    id: 5,
    title: 'Furniture 2',
    description: "this is Furniture description",
    category: 'furniture',
    image: require('../Assets/Images/pic5.webp'),
    price:400,
  },
  {
    id: 6,
    title: 'Furniture 3',
    description: "this is mobile phone description",
    category: 'furniture',
    image: require('../Assets/Images/pic6.webp'),
    price:500,
  },
  ])

  const[search,setSearch]=useState('')

  return (
    <SafeAreaView>
      <ScrollView>
        <View  className="p-4 gap-y-6">
      {/* header start */}
      <View style={gStyles.flexBetween}>
        <AntDesign name="left" size={20} onPress={()=>navigation.goBack()} />
        <Image className="w-[40px] h-[40px] object-cover" source={{ uri: 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png' }} />
      </View>

      {/* search start */}
      <View style={gStyles.flexRow} className="border p-3 border-gray-400 rounded-md">
        <AntDesign name="search1" size={20}  />
        <TextInput placeholder='Search' onChangeText={(text)=>setSearch(text)} value={search} />
      </View>

      {/* banner start */}
      <FlatList data={bannerData} renderItem={({ item, index }) => (
        <TouchableOpacity key={index}>
          <Image source={item} className="w-full h-[60px]" />
        </TouchableOpacity>
      )} />


      {/* category start */}
      <View>
        <Text style={styles.h1}>Categories</Text>
      </View>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={({ item, index }) => (
        <TouchableOpacity key={index} className="mr-8 p-4 gap-y-2">
          <Image source={item.image} className="w-[50px] h-[50px]" />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )} />

      {/* electronic product start start */}

      <View>
        <Text style={styles.h1}>Electonics Products</Text>
      </View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} className="card-container gap-x-6">
     {products.filter((val) => (
        val.category === "mobile"
      )).map((item, index) => (
        <TouchableOpacity key={index} className="card bg-white p-2 gap-y-2">
          <Image source={item.image}/>
          <Text style={styles.h2}>{item.title}</Text>
         <View style={gStyles.flexBetween}>
         <Text className="bg-secondry p-2 rounded-md">{item.category}</Text>
         <Text style={styles.h2}>${item.price}</Text>
         </View>
        </TouchableOpacity>
      ))}

     </ScrollView>

     {/* Furniture product start start */}

     <View>
        <Text style={styles.h1}>Furniture Products</Text>
      </View>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} className="card-container gap-x-6">
     {products.filter((val) => (
        val.category === "furniture"
      )).map((item, index) => (
        <TouchableOpacity key={index} className="card bg-white gap-y-2 p-2">
          <Image source={item.image} className="w-[220px] h-[220px] rounded-md"/>
          <Text style={styles.h2}>{item.title}</Text>
         <View style={gStyles.flexBetween}>
         <Text className="bg-secondry p-2 rounded-md">{item.category}</Text>
         <Text style={styles.h2}>${item.price}</Text>
         </View>
        </TouchableOpacity>
      ))}

     </ScrollView>
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  h1: { fontSize: 18, fontWeight: '600', color: Colors.black },
  h2: { fontSize: 16, fontWeight: '600', color: Colors.black }
})

export default HomeScreen
