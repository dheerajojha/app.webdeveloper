import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import GlobalStyles from '../../Constants/GlobalStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../Redux/Features/Day031/CartSlice';
import {showMessage} from 'react-native-flash-message';
const CartScreen = () => {
  const dispatch = useDispatch();
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const navigation: any = useNavigation();

  const removeFromCartHandler = (item: any) => {
    dispatch(removeFromCart(item));
    showMessage({type: 'success', message: `${item.title} Removed from Cart`});
  };
  const {cart} = useSelector((state: any) => state.cart31);
  console.log(cart);
  return (
    <SafeAreaView style={styles.cartWrapper}>
      {/* header start */}
      <View style={GlobalStyles.flexBetween}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <AntIcon name="left" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setToggleDropDown(!toggleDropDown)}>
          <EntIcon name="dots-three-horizontal" size={24} />
        </TouchableOpacity>
      </View>

      {toggleDropDown && (
        <View style={styles.absoluteContainer}>
          <Text style={styles.h3}>Profile</Text>
          <Text style={styles.h3}>Logout</Text>
        </View>
      )}
      <FlatList
        data={cart}
        contentContainerStyle={{gap: 20}}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <EntIcon
              name="cross"
              size={24}
              style={{position: 'absolute', right: 5, top: 5}}
              onPress={() => removeFromCartHandler(item)}
            />
            <View style={{backgroundColor: '#f1f2f3', borderRadius: 20}}>
              <Image source={item.image} style={{width: 100, height: 100}} />
            </View>
            <View>
              <Text style={styles.h2}>{item.title}</Text>
              <View style={[GlobalStyles.flexBetween, {width: '80%'}]}>
                <Text style={styles.h2}>${item.price}</Text>

                <View style={GlobalStyles.flexRow}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => dispatch(decrementQuantity(item))}>
                    <AntIcon name="minus" size={24} />
                  </TouchableOpacity>
                  <Text style={styles.h3}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => dispatch(incrementQuantity(item))}>
                    <AntIcon name="plus" size={24} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View
        style={[
          GlobalStyles.flexBetween,
          {padding: 10, borderColor: '#f1f2f3', borderWidth: 1},
        ]}>
        <Text style={styles.h2}>ADUIREW</Text>
        <Text style={styles.span}>Promocode Applied</Text>
      </View>

      {/* all ammounts */}
      <View style={{gap: 15}}>
        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h3}>Total</Text>
          <Text style={styles.h2}>{cart.price}</Text>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h3}>Delivery Fees</Text>
          <Text style={styles.h2}>$5</Text>
        </View>

        <View style={GlobalStyles.flexBetween}>
          <Text style={styles.h3}>Discount:</Text>
          <Text style={styles.h2}>30%</Text>
        </View>
      </View>

      <TouchableOpacity style={[GlobalStyles.cta, {width: '100%'}]}>
        <Text style={GlobalStyles.ctaText}>{`Checkout for ${cart.price}`}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 30, fontWeight: '600', width: '80%', color: '#000'},
  h2: {fontSize: 18, color: '#000', fontWeight: '500'},
  h3: {fontSize: 16, color: '#000', fontWeight: '400'},
  span: {fontSize: 14, color: '#19c563', fontWeight: '600'},
  cartWrapper: {padding: 10, flex: 1, gap: 15, backgroundColor: '#fff'},
  iconContainer: {backgroundColor: '#f1f2f3', padding: 10, borderRadius: 30},
  absoluteContainer: {
    backgroundColor: '#f1f2f3',
    width: '30%',
    height: '30%',
    padding: 20,
    position: 'absolute',
    right: 0,
    top: 60,
    zIndex: 200,
  },
  card: {
    borderBottomWidth: 1,
    borderColor: '#f1f2f3',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
});
