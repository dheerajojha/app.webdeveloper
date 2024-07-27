import { Image, StyleSheet, Text, View, Dimensions, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from 'react-native-safe-area-context'
import AntIcon from 'react-native-vector-icons/AntDesign'
import GlobalStyles from '../../Constants/GlobalStyles'
const { height, width } = Dimensions.get('window')
const DetailScreen = () => {
    const navigation: any = useNavigation()
    return (
        <SafeAreaView style={styles.detailWrapper}>
            <View style={GlobalStyles.flexRow}>
                <AntIcon name='left' size={20} />
                <Text>PickUp Details</Text>
            </View>

            <Image style={{ width: width * 0.95, height: height / 4, borderWidth: 1, borderColor: '#000' }} />

            <Pressable style={GlobalStyles.flexBetween}>
                <View style={GlobalStyles.flexRow}>
                    <View style={styles.iconContainer}>
                        <AntIcon name='home' size={20} />
                    </View>
                    <View>
                        <Text>Track Your Shipping</Text>
                        <Text>Price Check</Text>
                    </View>
                </View>
                <View style={styles.iconContainer}><AntIcon name='edit' size={20} /></View>
            </Pressable>

            <View style={styles.formGroup}>
                <AntIcon name='phone' size={20} />
                <TextInput placeholder='Enter Phone Number' />
            </View>

            <Text>Add me as a Shipper</Text>

            <View style={styles.formGroup}>
                <AntIcon name='mail' size={20} />
                <TextInput placeholder='Enter your mail' />
            </View>

            <View style={styles.formGroup}>
                <AntIcon name='mail' size={20} />
                <TextInput placeholder='Enter your mail' />
            </View>

            <View style={styles.formGroup}>
                <Text>Dropshipper</Text>
            </View>

      
          <TouchableOpacity style={styles.cta}>
                <Text style={styles.ctaText}>Next</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    detailWrapper: { flex: 1, backgroundColor: '#fff', gap: 20, padding: 10 },
    iconContainer: { justifyContent:'center',alignItems:'center',padding: 10, backgroundColor: '#f1f2f3', borderRadius: 30, elevation: 5 },
    formGroup: {height:60, borderColor: '#ccc', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 50, borderWidth: 1 ,flexDirection:'row',alignItems:'center',gap:5},
    cta: { backgroundColor: '#f44147', paddingHorizontal: 10, paddingVertical: 20, borderRadius: 50, shadowColor: '#f44147', elevation: 5, shadowOpacity: 5, },
    ctaText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: '500' },
})