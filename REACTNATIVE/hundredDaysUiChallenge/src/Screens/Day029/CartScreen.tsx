import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {clearCart, increment, removeFromCart} from '../../Redux/Features/CartSlice';
const CartScreen = () => {
  const navigation = useNavigation();
  const {cart} = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.cartWrapper}>
      {/* header start */}
      <View style={[GlobalStyles.flexRow, {gap: 150}]}>
        <AntIcon
          name="left"
          color="#fff"
          size={20}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.h1}>My Cart</Text>
      </View>

      <FlatList
        data={cart}
        renderItem={({item, index}) => (
          // card
          <GestureHandlerRootView>
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity
                  style={styles.deleteContainer}>
                  <AntIcon name="delete" color="#fff" size={20} onPress={()=>dispatch(removeFromCart(item))} />
                </TouchableOpacity>
              )}>
              <View style={styles.card} key={index}>
                <View style={GlobalStyles.flexRow}>
                  <Image source={item.image} style={{width: 50, height: 50}} />
                  {/* card body */}
                  <View>
                    <Text style={styles.h2}>{item.title}</Text>
                    <Text style={styles.h2}>${item.price}</Text>
                  </View>
                </View>
                <View>
                  <AntIcon name="plus" size={24} color="#fff" onPress={()=>dispatch(increment(item))} />
                </View>
              </View>
            </Swipeable>
          </GestureHandlerRootView>
        )}
      />

      <View style={{borderWidth: 1, borderColor: '#fff', marginVertical: 10}} />
      <View style={GlobalStyles.flexBetween}>
        <Text style={styles.h2}>Total</Text>
        <Text style={styles.h2}>$938</Text>
      </View>

      <TouchableOpacity style={styles.cta}>
        <Text style={styles.ctaText}>Order Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 18, fontWeight: '600', color: '#fff'},
  h2: {fontSize: 16, fontWeight: '500', color: '#fff'},
  cartWrapper: {backgroundColor: '#000', flex: 1, gap: 18, padding: 10},
  card: {
    backgroundColor: 'gray',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  cta: {backgroundColor: 'red', padding: 15, borderRadius: 5},
  ctaText: {color: '#fff', textAlign: 'center', fontSize: 16},
  deleteContainer:{ width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',}
});
