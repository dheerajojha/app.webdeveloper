import { Dimensions, Pressable, StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import GlobalStyles from '../../Constants/GlobalStyles'
import LottieView from 'lottie-react-native'
import FontIcon from "react-native-vector-icons/FontAwesome5"
import GlobalColors from '../../Constants/GlobalColors'
const { height, width } = Dimensions.get('window')
const HomeScreen: React.FC = () => {

  const [places, setPlaces] = useState([{
    title: 'Desert Safari Abhu Dhabi',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://visitabudhabi.ae/-/media/project/vad/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi/article-images/corniche-beach.jpg',
    rating: 4,
    category: 'latest'
  },
  {
    title: 'Desert Safari Abhu Dhabi 2',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/abu_dhabi/mmt/activities/t_ufs/m_activities_abu_dhabi_yas_waterworld_l_302_504.jpg',
    rating: 4,
    category: 'latest'
  },
  {
    title: 'Desert Safari Abhu Dhabi 3',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://www.trawell.in/admin/images/upload/693333308Abu_dhabi_ferrari_world.jpg',
    rating: 4,
    category: 'latest'
  },

  {
    title: 'Dusari Safari Abhu Dhabi4',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://visitabudhabi.ae/-/media/project/vad/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi/article-images/corniche-beach.jpg',
    rating: 4,
    category: 'old'
  },
  {
    title: 'Expire Safari Abhu Dhabi 5',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://hblimg.mmtcdn.com/content/hubble/img/abu_dhabi/mmt/activities/t_ufs/m_activities_abu_dhabi_yas_waterworld_l_302_504.jpg',
    rating: 4,
    category: 'old'
  },
  {
    title: 'Old Safari Abhu Dhabi 6',
    description: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    image: 'https://www.trawell.in/admin/images/upload/693333308Abu_dhabi_ferrari_world.jpg',
    rating: 4,
    category: 'old'
  }
  ])
  return (
  <>
  <StatusBar backgroundColor={GlobalColors.whiteColor} barStyle={'dark-content'}/>
   <ScrollView>
     <View style={styles.homeWrapper}>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <View style={styles.iconContainer} >
          <FontIcon name="bars" size={20} />
        </View>
        <LottieView source={require('../../Assets/Animations/user.json')} autoPlay={true} loop={true} style={{ width: 60, height: 60, }} />
      </View>

      {/* latest card start */}

      <View>
        <Text>Dream Gateway</Text>
        <Text style={styles.h1}>Explore the Ordinary</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
        {places.filter((val) => (
          val.category === "latest"
        )).map((item, index) => (
          <Pressable style={styles.card} key={index}>
            <Image source={{ uri: item.image }} style={{ width: width / 2, height: height / 2, borderRadius: 20 }} />
            <View style={styles.cardBody}>
              <Text style={styles.h2}>{item.title}</Text>
              <View style={GlobalStyles.flexRow}>
                <FontIcon name="star" size={16} color="yellow" />
                <Text style={{ color: 'white' }}>{item.rating}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* old card start */}

      <View>
        <Text style={styles.h3}>Favourite Sports</Text>
      </View>

      {places.filter((val) => (
        val.category === "old"
      )).map((item, index) => (
        <Pressable key={index} style={styles.oldCard}>
          <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 5 }} />
          <View style={{gap:10}}>
            <Text style={styles.h4}>{item.title}</Text>
            <View style={GlobalStyles.flexRow}>
              <Text>{item.rating}</Text>
              <FontIcon name="star" size={16} color="yellow" />
            </View>
          </View>
        </Pressable>
      ))}

    </View>
   </ScrollView>
  </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  h1: { fontSize: 24, color: GlobalColors.blackColor, fontWeight: '700' },
  h2: { fontSize: 18, color: GlobalColors.whiteColor, fontWeight: '500' },
  h3: { fontSize: 17, color: GlobalColors.blackColor, fontWeight: '600' },
  h4: { fontSize: 16, color: GlobalColors.blackColor, fontWeight: '600' },
  homeWrapper: { padding: 10, gap: 15 },
  iconContainer: { backgroundColor: GlobalColors.whiteColor, borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  card: { marginRight: 20 },
  cardBody: { position: 'absolute', bottom: 10, left: 10, backgroundColor: 'rgba(0,0,0,0.5)', padding: 5 },
  oldCard: { marginBottom: 10, backgroundColor: GlobalColors.whiteColor, padding: 10, borderRadius: 5,flexDirection:'row',gap:10 ,alignItems:'center'},
})