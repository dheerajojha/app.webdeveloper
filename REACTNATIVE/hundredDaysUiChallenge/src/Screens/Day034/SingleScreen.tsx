import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native"
import AntIcon from 'react-native-vector-icons/AntDesign'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from "react-native-linear-gradient"
import GlobalStyles from '../../Constants/GlobalStyles'
const { height, width } = Dimensions.get('window')
const SingleScreen = () => {
    interface categoryData {
        id: number,
        name: string,
        image: string
    }
    const categoryData: categoryData[] = [{
        id: 1,
        name: "BreakFast",
        image: require('../../Assets/Images/Day034/breakfast.png')
    },
    {
        id: 2,
        name: "Car Wash",
        image: require('../../Assets/Images/Day034/car-wash.png')
    },
    {
        id: 3,
        name: "Wifi",
        image: require('../../Assets/Images/Day034/wifi.png')
    },
    {
        id: 4,
        name: "Dumbbell",
        image: require('../../Assets/Images/Day034/dumbbell.png')
    },
    ]

    const navigation:any = useNavigation();
    const route = useRoute()
    const { items }: any = route.params
    return (
        <>
            <View style={styles.singleScreenWrapper}>
                <ImageBackground source={items.image} style={{ width: width, height: height / 3 }}>
                    <SafeAreaView style={[GlobalStyles.flexBetween, { padding: 10 }]}>
                        <TouchableOpacity style={styles.iconContainer} onPress={()=>(navigation.goBack())}>
                            <AntIcon name="left" size={20} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.iconContainer}>
                            <AntIcon name="save" size={20} color="#fff" />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <LinearGradient style={{ position: 'absolute', width: width, height: height / 3 }} colors={['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.2)']} />
                </ImageBackground>

                {/* second part start */}
                <View style={styles.secondPartContainer}>
                    {/* title start */}
                    <View style={[GlobalStyles.flexBetween]}>
                        <View>
                            <Text style={styles.h1}>{items.name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <EvilIcon name="location" size={20} />
                                <Text>{items.location}</Text>
                            </View>
                        </View>

                        <View>
                            <View style={styles.box}>
                                <Text style={{ color: 'green' }}>Open Now</Text>
                            </View>

                            <View>
                                <Text>⭐{items.rating}(3.14)</Text>
                            </View>
                        </View>
                    </View>

                    {/* contact start */}

                    <View style={GlobalStyles.flexBetween}>
                        <View style={[GlobalStyles.flexRow, styles.box]}>
                            <AntIcon name="phone" size={20} color="red" />
                            <Text style={{ color: '#000' }}>Contact</Text>
                            <AntIcon name="arrowright" size={20} />
                        </View>

                        <View style={[GlobalStyles.flexRow, styles.box]}>
                            <EvilIcon name="location" size={20} color="red" />
                            <Text style={{ color: '#000' }}>Location</Text>
                            <AntIcon name="arrowright" size={20} />
                        </View>

                        <View style={[GlobalStyles.flexRow, styles.box]}>
                            <AntIcon name="book" size={20} color="red" />
                            <Text style={{ color: '#000' }}>Menu</Text>
                            <AntIcon name="arrowright" size={20} />
                        </View>
                    </View>


                    <View style={[GlobalStyles.flexRow, styles.box, { padding: 20, borderRadius: 10 }]}>
                        <AntIcon name="clockcircle" size={20} color="green" />
                        <Text style={{ fontWeight: '600', color: '#000' }}>Open Now : Close at 03:00 AM</Text>
                    </View>

                    {/* description start */}

                    <View>
                        <Text style={[styles.h2,{marginBottom:4}]}>Description</Text>
                        <Text>{items.description}</Text>
                    </View>

                    {/* related image gallery start */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {items.relatedImage.map((val: any) => (

                            <TouchableOpacity>
                                <Image source={val} style={{ width: width / 4, height: 80, borderRadius: 15 }} />
                                <LinearGradient style={{ borderRadius: 15, width: width / 4, height: 80, position: 'absolute' }} colors={['transparent', 'rgba(0,0,0,0.4)']} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* related image gallery start */}
                    <View style={GlobalStyles.flexBetween}>
                        {categoryData.map((item) => (
                            <TouchableOpacity key={item.id} style={styles.card}>
                                <Image source={item.image} style={{ width: 40, height: 40 }} />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

            </View>
            {/* cta start */}
            <View style={[GlobalStyles.flexBetween, { width: '100%', backgroundColor: '#fff', padding: 10, position: 'absolute', bottom: 0,height:75 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.h2, { color: 'red', }]}>${items.price}</Text>
                    <Text style={{fontWeight:'600',color:'#000'}}>/Night</Text>
                </View>
                <TouchableOpacity style={styles.cta}>
                    <Text style={styles.ctaText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default SingleScreen

const styles = StyleSheet.create({
    h1: { color: '#000', fontSize: 28, fontWeight: '600' },
    h2: { color: '#000', fontSize: 24, fontWeight: '500' },
    singleScreenWrapper: {},
    iconContainer: { backgroundColor: "rgba(0,0,0,0.4)", padding: 10, borderRadius: 30 },
    secondPartContainer: { padding: 10, gap: 20 },
    cta: {
        backgroundColor: 'red',
        paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20
    },
    ctaText: { fontWeight: '600', color: '#ffff' },
    box: { backgroundColor: '#fff', padding: 10, borderRadius: 20 },
    card: { backgroundColor: '#fff', padding: 10, borderRadius: 10, alignItems: 'center', gap: 10, shadowColor: 'rgba(0,0,0,0.5)', elevation: 4, }

})