import { ImageBackground, StyleSheet, Text, View, Dimensions, StatusBar, TextInput, TouchableOpacity, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import GlobalStyles from '../../Constants/GlobalStyles'
import Carousel from 'react-native-reanimated-carousel'
const { height, width } = Dimensions.get('window')
const HomeScreen = () => {
  interface carouselType {
    id: number,
    title: string,
    discount: number,
    image: string
  }
  const carouselData: carouselType[] = [{
    id: 1,
    title: "BreakFast Details",
    discount: 20,
    image: require('../../Assets/Images/Day034/pic1.jpg')
  },
  {
    id: 2,
    title: "BreakFast Details 2",
    discount: 16,
    image: require('../../Assets/Images/Day034/pic2.jpg')
  },
  {
    id: 3,
    title: "BreakFast Details 3",
    discount: 10,
    image: require('../../Assets/Images/Day034/pic3.jpg')
  },
  ]

  interface categoryData {
    id: number,
    name: string,
    image: string
  }
  const categoryData: categoryData[] = [{
    id: 1,
    name: "Restaurent",
    image: require('../../Assets/Images/Day034/restaurant.png')
  },
  {
    id: 2,
    name: "Car Wash",
    image: require('../../Assets/Images/Day034/car-wash.png')
  },
  {
    id: 3,
    name: "Delivery",
    image: require('../../Assets/Images/Day034/shipment.png')
  },
  {
    id: 4,
    name: "Tech Shop",
    image: require('../../Assets/Images/Day034/technology.png')
  },
  {
    id: 5,
    name: "Movers",
    image: require('../../Assets/Images/Day034/truck.png')
  },
  {
    id: 6,
    name: "Petrol Station",
    image: require('../../Assets/Images/Day034/petrol.png')
  },
  {
    id: 7,
    name: "Hotels",
    image: require('../../Assets/Images/Day034/r.png')
  },
  {
    id: 8,
    name: "More",
    image: require('../../Assets/Images/Day034/more.png')
  },
  ]
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View style={styles.homeWrapper}>
        <ImageBackground source={require('../../Assets/Images/Day034/bg1.jpg')} style={{ height: height / 3, width: width, }}>
          <SafeAreaView style={{ padding: 10, gap: 15 }}>
            {/* header start */}
            <View style={GlobalStyles.flexBetween}>
              <View>
                <Text>admin</Text>
              </View>

              <View>
                <Text>Canavas</Text>
              </View>

              <View style={styles.iconContainer}>
                <AntIcon name="bells" size={20} color="#fff" />
              </View>
            </View>

            <View>
              <Text style={styles.h1}>Hey Valley✋</Text>
              <Text style={{ color: '#fff', fontWeight: '300' }}>Discover Whats Happening Around You</Text>
            </View>

            <View style={styles.searchContainer}>
              <AntIcon name="search1" size={24} style={{ flex: 10 }} />
              <TextInput placeholder='Search Restaurent' style={{ flex: 80 }} />
              <MaterialIcon name="sort-variant" size={24} style={{ flex: 10 }} />
            </View>
          </SafeAreaView>
        </ImageBackground>

        {/* second part start */}
        <View style={{ padding: 10,gap:15 }}>

          {/* carousel start */}
          <View style={{ alignItems: 'center' }}>
            <Carousel
              loop
              style={{ borderRadius: 20 }}
              width={width * 0.9}
              height={width / 2}
              autoPlay={true}
              data={carouselData}
              scrollAnimationDuration={1000}
              onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={({ item, index }) => (
                // card start
                <View key={index} style={{ flex: 1, justifyContent: 'center' }} >
                  <Image source={item.image} style={{ width: 'auto', objectFit: 'contain', }} />
                  {/* // card body start */}
                  <View style={{ padding: 20, position: 'absolute' }}>
                    <Text style={[styles.h1, { fontWeight: '700' }]}>{item.title}</Text>
                    <View style={[GlobalStyles.flexBetween, { width: '100%' }]}>
                      <Text style={{ color: '#fff' }}>Discount Upto{item.discount}</Text>
                      <TouchableOpacity style={styles.cta}>
                        <Text style={styles.ctaText}>Explore</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>

          {/* category start */}
          <FlatList contentContainerStyle={{ gap: 20, marginTop: 220 }} numColumns={4} data={categoryData} renderItem={({ item, index }) => (
            <Pressable key={index} style={{ padding: 10, marginRight: 20, alignItems: 'center', gap: 15 }}>
              <Image source={item.image} style={{ width: 40, height: 40 }} />
              <Text>{item.name}</Text>
            </Pressable>
          )} />
          {/* trending item start */}

          <View style={GlobalStyles.flexBetween}>
            <Text style={styles.h2}>Trending</Text>
            <Text style={styles.small}>View All</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 30 },
  h2: { fontWeight:'600', fontSize: 20,color:'#000' },
  small: { fontWeight:'600', fontSize: 14,color:'red' },
  homeWrapper: { gap: 15, },
  searchContainer: {
    backgroundColor: "#fff", flexDirection: 'row', alignItems: 'center',
    padding: 8, borderRadius: 10
  },
  iconContainer: { backgroundColor: "rgba(0,0,0,0.4)", padding: 10, borderRadius: 30 },
  cta: {
    backgroundColor: '#fff',
    paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20
  },
  ctaText: { fontWeight: '600', color: 'red' }
})