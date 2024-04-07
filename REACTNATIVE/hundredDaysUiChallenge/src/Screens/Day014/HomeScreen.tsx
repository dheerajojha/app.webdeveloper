import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import supabase from '../../../Config/supabaseClient';

const HomeScreen: React.FC = () => {
  const [supaBase, setSupaBase] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const FetchSupaBase = async () => {
    const {error, data} = await supabase.from('supabasetesting').select('');
    if (error) {
      setFetchError('could not fetch data');
      setSupaBase([]);
    }
    if (data) {
      setSupaBase(data);
      setFetchError('');
    }
  };

  useEffect(() => {
    FetchSupaBase();
  }, []);
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWrapper: {padding: 10},
});
