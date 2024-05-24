import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import gStyles from "../../style";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { showMessage } from "react-native-flash-message";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const registerHandler = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        showMessage({type:'success',message:"user registered success"})
        navigation.navigate("LoginScreen")
      }
    } catch (error) {
      showMessage({type:'danger',message:error.message})
    }
  };

  return (
    <SafeAreaView className="justify-center items-center h-full p-4">
      <Text style={styles.h1}>MARKETPLACE</Text>
      <View className="w-full gap-y-6">
        <View className="gap-y-6">
          <TextInput
            placeholder="Email"
            style={gStyles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            style={gStyles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={gStyles.cta} onPress={registerHandler}>
          <Text style={gStyles.ctaText}>Register</Text>
        </TouchableOpacity>
        <Text className="text-center">
          Already have an Account?{" "}
          <Text
            style={gStyles.small}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Login
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  h1: { fontSize: 24, fontWeight: "600", fontStyle: "italic" },
});
