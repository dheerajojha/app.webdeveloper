import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { Formik } from 'formik'
import gStyle from "../../style"
import { Picker } from "@react-native-picker/picker"
import colors from '../Constants/colors'
const AddPostScreen = () => {
  const [category, setCategory] = useState([])

  const getCategory = async () => {
    try {
      const colRef = collection(db, 'Category')
      const snapShot = await getDocs(colRef)
      const data = snapShot.docs.map((doc) => (
        { ...doc.data() }
      ))
      setCategory(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <SafeAreaView className="p-4">
    
        <Formik initialValues={{ title: '', category: '', description: '', image: '', price: '' }} onSubmit={(value) => console.Console.log(value)}>
          {({ handleChange, handleSubmit, handleBlur, values, setFieldValue }) =>
            <View className="gap-y-4">
              <Text style={styles.h1}>Add Post</Text>
              <Image className="w-[100px] h-[100px]" source={require('../Assets/Images/p.png')} />
              <View>
                <TextInput value={values?.title} onChangeText={handleChange('title')} style={styles.input} placeholder='Title' />
              </View>

              <View>
                <TextInput value={values?.description} onChangeText={handleChange('description')} style={styles.input} placeholder='Decription' numberOfLines={5} />
              </View>
              <View>
                <TextInput value={values?.price} onChangeText={handleChange('price')} style={styles.input} placeholder='Price' keyboardType='number-pad' />
              </View>
              <Picker selectedValue={values.category} onValueChange={itemValue => setFieldValue('category', itemValue)} style={styles.input}>
                {category.map((item, index) => (
                  <Picker.Item key={index} label={item.title} value={item.title} />

                ))}
              </Picker>
              <TouchableOpacity style={gStyle.cta} onPress={handleSubmit}>
                <Text style={gStyle.ctaText}>Submit</Text>
              </TouchableOpacity>
            </View>
          }
        </Formik>
    </SafeAreaView>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
  h1: { fontSize: 18, fontWeight: '600', color: colors.black },
  input: { borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5 }
})