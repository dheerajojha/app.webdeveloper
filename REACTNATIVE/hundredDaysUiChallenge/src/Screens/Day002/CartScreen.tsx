import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Header';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const CartScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const [inc, setInc] = useState<number>(1);
  type productType = {
    id: number;
    image: string;
    title: string;
    price: number;
  };
  const [product, setProduct] = useState<productType[]>([
    {
      id: 1,
      image: require('../../Assets/Images/Day2/pic1.png'),
      title: 'Rudy BackPack',
      price: 2000,
    },
    {
      id: 2,
      image: require('../../Assets/Images/Day2/pic2.png'),
      title: 'Json BackPack',
      price: 3000,
    },
  ]);

  return (
    <>
      <Header title="Cart" />
      <SafeAreaView style={styles.cartWrapper}>
        {/* cart start */}
        <FlatList
          data={product}
          renderItem={({item, index}) => (
            <Pressable key={index} style={styles.cardContainer}>
              <Image source={item.image} style={{margin: 5}} />
              <View style={{gap: 10, flexDirection: 'column'}}>
                <Text style={styles.h2}>{item.title}</Text>
                <Text style={{color: GlobalColors.primaryColor}}>
                  ${item.price}
                </Text>
                <View style={GlobalStyles.flexRow}>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setInc(inc + 1)}>
                    <AntIcon
                      name="plus"
                      size={20}
                      color={GlobalColors.blackColor}
                    />
                  </TouchableOpacity>
                  <Text>{inc}</Text>
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => setInc(Math.max(1, inc - 1))}>
                    <AntIcon
                      name="minus"
                      size={20}
                      color={GlobalColors.blackColor}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          )}
        />

        {/* content start */}
        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Offers</Text>
          <Text style={styles.h3}>Add a Cart</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.h3}>Address</Text>
          <Text style={styles.h3}>123 Campbridge</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.h3}>SubTotal</Text>
          <Text style={styles.h3}>@8928</Text>
        </View>

        <Pressable
          style={styles.cta}
          onPress={() => navigation.navigate('Checkout')}>
          <Text style={styles.ctaText}>Checkout</Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  h2: {fontSize: 20, fontWeight: '600', color: GlobalColors.blackColor},
  h3: {fontSize: 18, fontWeight: '500', color: GlobalColors.blackColor},
  cartWrapper: {padding: 10, gap: 10},
  iconContainer: {padding: 10, backgroundColor: GlobalColors.secondryColor},
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: GlobalColors.whiteColor,
    marginBottom: 10,
  },
  contentContainer: {
    backgroundColor: GlobalColors.whiteColor,
    padding: 13,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: GlobalColors.blackColor,
    borderRadius: 20,
    marginTop: 10,
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: GlobalColors.whiteColor,
  },
});
