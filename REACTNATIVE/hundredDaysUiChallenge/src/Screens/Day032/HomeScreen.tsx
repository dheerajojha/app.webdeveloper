import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EntIcon from "react-native-vector-icons/Entypo"
import AntIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import GlobalStyles from '../../Constants/GlobalStyles'
const HomeScreen = () => {
    const [contactList, setContactList] = useState([{
        id: 1,
        name: 'Philip',
        image: require('../../Assets/Images/Day032/pic1.png')
    },
    {
        id: 2,
        name: 'Anny',
        image: require('../../Assets/Images/Day032/pic2.png')
    },
    {
        id: 3,
        name: 'Suniyo',
        image: require('../../Assets/Images/Day032/pic3.png')
    },
    {
        id: 4,
        name: 'Huniyo',
        image: require('../../Assets/Images/Day032/pic4.png')
    },
    {
        id: 5,
        name: 'Kakasi',
        image: require('../../Assets/Images/Day032/pic5.png')
    },
    ])

    const [messages, setMessages] = useState([{
        id: 1,
        name: 'Philip',
        image: require('../../Assets/Images/Day032/pic1.png'),
        message: "Hey Bro Whatsupp dude"
    },
    {
        id: 2,
        name: 'Anny',
        image: require('../../Assets/Images/Day032/pic2.png'),
        message: "Hey Bro Whatsupp dude"
    },
    {
        id: 3,
        name: 'Suniyo',
        image: require('../../Assets/Images/Day032/pic3.png'),
        message: "Hiiii Bro Whatsupp dude"
    },
    {
        id: 4,
        name: 'Huniyo',
        image: require('../../Assets/Images/Day032/pic4.png'),
        message: "Hey Buddy Whatsupp dude"
    },
    {
        id: 5,
        name: 'Kakasi',
        image: require('../../Assets/Images/Day032/pic5.png'),
        message: "Hi Brosky Whatsupp dude"
    },
    ])
    return (
        <SafeAreaView style={styles.homeWrapper}>
            <StatusBar backgroundColor={'#6a5bc2'} />
            <View style={styles.topContainer}>
                {/* header start */}
                <View style={GlobalStyles.flexBetween}>
                    <Text style={{ color: '#fff' }}>Hi, Peter</Text>
                    <EntIcon name="grid" size={24} color={'#fff'} />
                </View>

                <View>
                    <Text style={{ color: '#fff' }}>Your Received</Text>
                    <Text style={styles.h1}>30 Messages</Text>
                </View>

                <FlatList contentContainerStyle={{ gap: 30 }} data={contactList} horizontal showsHorizontalScrollIndicator={false} renderItem={(({ item }) => (
                    <TouchableOpacity key={item.id} style={{ alignItems: 'center', gap: 10 }}>
                        <Image source={item.image} style={{ width: 60, height: 60, backgroundColor: 'red', borderRadius: 30 }} />
                        <View style={{position:'absolute',backgroundColor:'lightgreen' ,width:20,height:20,borderRadius:30,top:0,right:0}}/>
                        <Text style={{ color: '#fff' }}>{item.name}</Text>
                    </TouchableOpacity>
                ))} />
            </View>

            {/* bottom container start */}
            <View style={styles.bottomContainer}>
                <View style={GlobalStyles.flexBetween}>
                    <AntIcon name="search1" size={20} />
                    <Text style={[styles.roundedBox, { backgroundColor: '#f4f185' }]}>Direct Messsage(3)</Text>
                    <Text style={[styles.roundedBox, { backgroundColor: '#fff' }]}>Direct Messsage(10)</Text>
                </View>

                <Text style={styles.h2}>All Message({messages.length})</Text>
                <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 40 }} data={messages} renderItem={({ item }) => (
                    <TouchableOpacity style={GlobalStyles.flexRow}>
                        <Image source={item.image} style={{ width: 60, height: 60 }} />
                        <View style={{ width: '80%' }}>
                            <View style={GlobalStyles.flexBetween}>
                                <Text style={styles.h2}>{item.name}</Text>
                                <Text style={styles.p}>10:09am</Text>
                            </View>
                            <View style={GlobalStyles.flexBetween}>
                                <Text style={styles.p}>{item.message}</Text>
                                <MaterialIcon name="check-all" size={16} />
                            </View>
                        </View>
                    </TouchableOpacity>
                )} />

                <View style={styles.circularBox}>
                    <AntIcon name="plus" size={24} color="#fff" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    h1: { fontSize: 18, fontWeight: '600', color: '#fff' },
    h2: { fontSize: 16, fontWeight: '500',color:'#000' },
    p: { fontSize: 14, fontWeight: '400', },
    homeWrapper: { flex: 1, backgroundColor: '#6a5bc2' },
    topContainer: { flex: 3, backgroundColor: '#6a5bc2', padding: 15, gap: 15 },
    bottomContainer: {
        gap: 15,
        flex: 7, padding: 15, borderTopLeftRadius: 20,
        borderTopRightRadius: 20, backgroundColor: '#f1f2f4',
    },
    roundedBox: { padding: 14, borderRadius: 30 },
    circularBox: { padding: 10, backgroundColor: '#6a5bc2', position: 'absolute',
         right: 20, bottom: 30, borderRadius: 30 }

})