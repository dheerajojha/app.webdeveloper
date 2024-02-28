import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../Utils/Color';

const HealthScreen2: React.FC = () => {
  type servicesType = {
    icon: string;
    title: string;
  };

  const [services, setServices] = useState<servicesType[]>([
    {
      icon: require('../Assets/Images/heart.png'),
      title: 'Heart',
    },
    {
      icon: require('../Assets/Images/toothache.png'),
      title: 'Dentist',
    },
    {
      icon: require('../Assets/Images/medicine.png'),
      title: 'Drug',
    },
    {
      icon: require('../Assets/Images/other.png'),
      title: 'Others',
    },
  ]);

  type doctorstype = {
    image: string;
    title: string;
    des: string;
    rating: number;
    review: number;
  };

  const [doctors, setDoctors] = useState<doctorstype[]>([
    {
      image: require('../Assets/Images/doc1.png'),
      title: 'Peter Navil',
      des: 'Dentist Specialist',
      rating: 4,
      review: 2981,
    },
    {
      image: require('../Assets/Images/doc2.png'),
      title: 'Harley Kurse',
      des: 'Dentist Specialist',
      rating: 3,
      review: 2281,
    },
    {
      image: require('../Assets/Images/doc3.png'),
      title: 'Jenyy Sujuka',
      des: 'Dentist Specialist',
      rating: 5,
      review: 2911,
    },
  ]);
  return (
    <SafeAreaView style={styles.health2Wrapper}>
      {/* header start */}
      <View style={styles.flexBetween}>
        <View>
          <Text style={styles.h1}>Hi Mitchael!</Text>
          <Text style={styles.h3}>How are your Feeling Today?</Text>
        </View>
        <Image
          source={require('../Assets/Images/user.png')}
          style={{borderRadius: 50, width: 50, height: 50}}
        />
      </View>

      {/* book start */}
      <View style={styles.bookContainer}>
        <View style={{gap: 10}}>
          <Text style={[styles.h2, {color: Color.whiteColor}]}>
            Let's Get Vaccine For Healthier
          </Text>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Book Now</Text>
          </Pressable>
        </View>
        <Image
          source={require('../Assets/Images/medical-staff.png')}
          maxWidth={100}
          maxHeight={100}
        />
      </View>
      {/* services start */}

      <View>
        <Text style={styles.h1}>Our Services</Text>
      </View>

      <FlatList
        numColumns={4}
        data={services}
        renderItem={({item}) => (
          <Pressable style={styles.card}>
            <Image source={item.icon} style={{width: 40, height: 40}} />
            <Text>{item.title}</Text>
          </Pressable>
        )}
      />

      {/* services start */}

      <View style={styles.flexBetween}>
        <Text style={styles.h1}>Our Doctors</Text>
        <Text style={styles.h3}>Sell All</Text>
      </View>

      <FlatList
        data={doctors}
        renderItem={({item}) => (
          <Pressable style={styles.doctorCard}>
            <Image source={item.image} />
            <View style={{gap: 8}}>
              <Text style={styles.h2}>{item.title}</Text>
              <Text style={styles.h3}>{item.des}</Text>
              <Text>
                <Text style={{color: Color.blackColor, fontWeight: '600'}}>
                  ⭐{item.rating}
                </Text>
                <Text>({item.review} Reviews)</Text>
              </Text>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

export default HealthScreen2;

const styles = StyleSheet.create({
  h1: {fontSize: 18, fontWeight: '600', color: Color.blackColor},
  h2: {fontSize: 16, fontWeight: '500', color: '#06919D'},
  h3: {fontSize: 14, fontWeight: '400', color: '#06919D'},
  health2Wrapper: {
    padding: 10,
    backgroundColor: Color.whiteColor,
    gap: 15,
  },
  flexBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  card: {
    borderColor: Color.grayColor,
    borderWidth: 2,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
    padding: 10,
    gap: 10,
    width: '100%',
    height: 90,
  },
  bookContainer: {
    backgroundColor: '#06919D',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    gap: 5,
  },

  doctorCard: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  cta: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '70%',
    backgroundColor: Color.secondryColor,
    borderColor: Color.whiteColor,
    borderWidth: 1,
  },
  ctaText: {
    color: Color.whiteColor,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
