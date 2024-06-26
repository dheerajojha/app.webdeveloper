import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useFormik } from "formik";
import * as Yup from "yup";
import gStyle from "../../style";
import { Picker } from "@react-native-picker/picker";
import colors from "../Constants/colors";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import gStyles from "../../style";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { db } from "../../firebaseConfig";
import { ref, uploadBytes, getStorage, getDownloadURL } from "firebase/storage";

const AddPostScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const colRef = collection(db, "Category");
      const snapShot = await getDocs(colRef);
      const data = snapShot.docs.map((doc) => ({ ...doc.data() }));
      setCategory(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const validateSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description:Yup.string().required('Description is required'),

  });
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
    },
    // validationSchema: validateSchema,

    onSubmit: async (value) => {
      try {
        setLoading(true);
        await validateSchema.validate(value); 
        const storage = getStorage();
        // add to firestore and store
        const colRef = collection(db, "Posts");
        const result = await addDoc(colRef, value);
        // add image uri to blob file

        const resp = await fetch(selectedImage);
        const blob = await resp.blob();

        const storageRef = ref(storage, "communityPost/" + Date.now() + ".jpg");
        // 'file' comes from the Blob or File API
        const uploadByte = await uploadBytes(storageRef, blob);
        const downloadUrl = await getDownloadURL(storageRef);
        formik.values.image = downloadUrl;
        if (result) {
          setLoading(false);
          showMessage({ type: "success", message: "post add successfully" });
        }
      } catch (error) {
       showMessage({type:'danger',message:error.message})
      }
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="p-4">
      <View className="gap-y-4">
        <View style={gStyles.flexRow}>
          <Entypo
            name="chevron-small-left"
            size={28}
            color="black"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text style={styles.h1}>Add Post</Text>
        </View>
        <TouchableOpacity onPress={pickImage}>
          {selectedImage ? (
            <Image
              className="w-[100px] h-[100px]"
              source={{ uri: selectedImage }}
            />
          ) : (
            <Image
              className="w-[100px] h-[100px]"
              source={require("../Assets/Images/p.png")}
            />
          )}
        </TouchableOpacity>
        <View>
          <TextInput
            value={formik.values?.title}
            onChangeText={formik.handleChange("title")}
            style={styles.input}
            placeholder="Title"
          />
        </View>

        <View>
          <TextInput
            value={formik.values?.description}
            onChangeText={formik.handleChange("description")}
            style={styles.input}
            placeholder="Decription"
            numberOfLines={5}
          />
        </View>
        <View>
          <TextInput
            value={formik.values?.price}
            onChangeText={formik.handleChange("price")}
            style={styles.input}
            placeholder="Price"
            keyboardType="number-pad"
          />
        </View>
        <Picker
          selectedValue={formik.values.category}
          onValueChange={(itemValue) => {
            formik.setFieldValue("category", itemValue);
          }}
        >
          {category.map((item, index) => (
            <Picker.Item key={index} label={item.title} value={item.title} />
          ))}
        </Picker>
        <TouchableOpacity
          style={gStyle.cta}
          onPress={formik.handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={gStyle.ctaText}>Submit</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  h1: { fontSize: 18, fontWeight: "600", color: colors.black },
  input: { borderColor: "gray", borderWidth: 1, padding: 10, borderRadius: 5 },
});
