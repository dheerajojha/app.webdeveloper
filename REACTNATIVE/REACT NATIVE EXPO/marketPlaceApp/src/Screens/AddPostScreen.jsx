import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import {useFormik} from "formik"
import gStyle from "../../style"
import { Picker } from "@react-native-picker/picker"
import colors from '../Constants/colors'
import * as ImagePicker from 'expo-image-picker';
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


  const[selectedImage,setSelectedImage]=useState(null)
  const formik = useFormik(({
    initialValues:{
      title:"",
      description:'',
      price:'',
      category:''
      
    },
    onSubmit:(value)=>{
      console.log(value)
      console.log(selectedImage)
    }
  }))

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const addPostHandler =async ()=>{
    try {
      const colRef = collection(db,'Category')
      const response = await addDoc(colRef,)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <SafeAreaView className="p-4">    
            <View className="gap-y-4">
              <Text style={styles.h1}>Add Post</Text>
              <TouchableOpacity onPress={pickImage}>
            {selectedImage ?  <Image className="w-[100px] h-[100px]" source={{uri:selectedImage}} />:  <Image className="w-[100px] h-[100px]" source={require('../Assets/Images/p.png')} />}
              </TouchableOpacity>
              <View>
                <TextInput value={formik.values?.title} onChangeText={formik.handleChange('title')} style={styles.input} placeholder='Title' />
              </View>

              <View>
                <TextInput value={formik.values?.description} onChangeText={formik.handleChange('description')} style={styles.input} placeholder='Decription' numberOfLines={5} />
              </View>
              <View>
                <TextInput value={formik.values?.price} onChangeText={formik.handleChange('price')} style={styles.input} placeholder='Price' keyboardType='number-pad' />
              </View>
              <Picker selectedValue={formik.values.category} onValueChange={(itemValue)=>{formik.setFieldValue('category',itemValue)}} style={styles.input}>
                {category.map((item, index) => (
                  <Picker.Item key={index} label={item.title} value={item.title} />

                ))}
              </Picker>
              <TouchableOpacity style={gStyle.cta} onPress={formik.handleSubmit}>
                <Text style={gStyle.ctaText}>Submit</Text>
              </TouchableOpacity>
            </View>
       
    </SafeAreaView>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
  h1: { fontSize: 18, fontWeight: '600', color: colors.black },
  input: { borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5 }
})