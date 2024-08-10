import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native"

const GetStarted = () => {
    const navigation: any = useNavigation()
    setTimeout(() => {
        navigation.navigate('home')
    }, 1000);
    return (
        <>
            <StatusBar backgroundColor={'transparent'} translucent barStyle={'light-content'} />

            <SafeAreaView style={styles.getstartedwrapper}>
                <View style={styles.iconContainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>E</Text>
                </View>
                <Text style={{ fontSize: 38, color: '#fff' }}>
                    Expedia
                </Text>
            </SafeAreaView>
        </>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    iconContainer: { backgroundColor: 'yellow', width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
    getstartedwrapper: { backgroundColor: '#2196F3', flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
})