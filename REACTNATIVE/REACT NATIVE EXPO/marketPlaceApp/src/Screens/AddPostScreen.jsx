import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from "../../firebaseConfig";
import { getFirestore } from 'firebase/firestore';

const AddPostScreen = () => {
  const db = getFirestore(app);
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await db.collection('Category').get();
                const fetchedData = querySnapshot.docs.map(doc => doc.data());
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
  return (
    <View>
      <Text>{data}</Text>
      <Text>AddPostScreen</Text>
    </View>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({})