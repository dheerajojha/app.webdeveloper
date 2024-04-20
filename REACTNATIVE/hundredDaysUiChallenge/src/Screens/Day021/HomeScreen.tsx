/* eslint-disable react-native/no-inline-styles */
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import GlobalStyles from '../../Constants/GlobalStyles';
import GlobalColors from '../../Constants/GlobalColors';

const HomeScreen: React.FC = () => {
  interface instructorType {
    title: string;
    image: string;
  }
  const [instructor, setInstructor] = useState<instructorType[]>([
    {
      title: 'Norman',
      image: require('../../Assets/Images/Day012/man.png'),
    },
    {
      title: 'Mitchel',
      image: require('../../Assets/Images/Day012/man1.png'),
    },
    {
      title: 'Pratt',
      image: require('../../Assets/Images/Day012/man2.png'),
    },
    {
      title: 'Chris',
      image: require('../../Assets/Images/Day012/woman.png'),
    },
    {
      title: 'Mitchel',
      image: require('../../Assets/Images/Day012/man1.png'),
    },
    {
      title: 'Pratt',
      image: require('../../Assets/Images/Day012/man2.png'),
    },
  ]);

  interface courseType {
    id: number;
    categoryId: number;
    title: string;
    image: string;
    duration: number;
    lessons: number;
    description: string;
  }
  const [course, setCourse] = useState<courseType[]>([
    {
      id: 1,
      categoryId: 1,
      title: 'Learn App Development',
      image: require('../../Assets/Images/Day021/app.png'),
      duration: 1,
      lessons: 24,
      description:
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.',
    },
    {
      id: 2,
      categoryId: 2,
      title: 'Learn Web Development',
      image: require('../../Assets/Images/Day021/web.png'),
      duration: 2,
      lessons: 21,
      description:
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.',
    },
    {
      id: 3,
      categoryId: 2,
      title: 'Learn UIUX Design',
      image: require('../../Assets/Images/Day021/front.png'),
      duration: 1,
      lessons: 29,
      description:
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.',
    },
    {
      id: 4,
      categoryId: 1,
      title: 'Learn Programming',
      image: require('../../Assets/Images/Day021/front.png'),
      duration: 1,
      lessons: 29,
      description:
        'Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics.',
    },
  ]);

  interface categoryType {
    id: number;
    title: string;
  }

  const [category, setCategory] = useState<categoryType[]>([
    {id: 1, title: 'App Development'},
    {id: 2, title: 'Web Development'},
    {id: 3, title: 'UIUX'},
  ]);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);

  const buttonActiveHandler = (id: number) => {
    setActiveCategoryId(id);
  };
  return (
    <>
      <StatusBar
        backgroundColor={GlobalColors.whiteColor}
        barStyle={'dark-content'}
      />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.homeWrapper}>
            {/* header start */}
            <View style={GlobalStyles.flexBetween}>
              <View style={GlobalStyles.flexRow}>
                <LottieView
                  source={require('../../Assets/Animations/user.json')}
                  autoPlay={true}
                  loop={true}
                  style={{width: 60, height: 60}}
                />
                <Text style={styles.h2}>Hi John Smith</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  backgroundColor: GlobalColors.grayColor,
                  borderRadius: 20,
                }}>
                <IonIcon
                  name="notifications"
                  size={20}
                  color={GlobalColors.blackColor}
                />
              </View>
            </View>

            {/* brand start */}
            <View style={[styles.brandContainer, GlobalStyles.flexRow]}>
              <Text
                style={[
                  styles.h1,
                  {flex: 1, color: GlobalColors.primaryColor},
                ]}>
                Discover How to be creative
              </Text>
              <LottieView
                source={require('../../Assets/Animations/rocket2.json')}
                style={{width: 100, height: 100}}
                autoPlay={true}
                loop={true}
              />
            </View>

            {/* instructor start */}
            <View style={GlobalStyles.flexBetween}>
              <Text style={styles.h2}>Instructor</Text>
              <Text
                style={{color: GlobalColors.primaryColor, fontWeight: '600'}}>
                See all
              </Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={instructor}
              renderItem={({item, index}) => (
                <Pressable
                  key={index}
                  style={{marginRight: 30, gap: 10, alignItems: 'center'}}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, objectFit: 'contain'}}
                  />
                  <Text style={styles.h3}>{item.title}</Text>
                </Pressable>
              )}
            />

            {/* course title start */}
            <View style={GlobalStyles.flexBetween}>
              <Text style={styles.h2}>Courses</Text>
              <Text
                style={{color: GlobalColors.primaryColor, fontWeight: '600'}}>
                See all
              </Text>
            </View>

            {/* course category start */}
            <FlatList
              horizontal
              data={category}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.categoryContainer}
                  onPress={() => buttonActiveHandler(item.id)}>
                  <Text
                    style={[
                      activeCategoryId === item.id && {
                        color: GlobalColors.primaryColor,
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
            <View style={styles.divider} />

            {/* course data start */}
            {course
              .filter(f => {
                return f.categoryId === activeCategoryId;
              })
              .map(item => {
                return (
                  <Pressable
                    key={item.id}
                    style={[GlobalStyles.flexRow, styles.courseContainer]}>
                    <Image
                      source={item.image}
                      style={{width: 100, height: 100, objectFit: 'contain'}}
                    />
                    <View style={{gap: 8}}>
                      <View style={[GlobalStyles.flexRow, {gap: 15}]}>
                        <View style={GlobalStyles.flexRow}>
                          <IonIcon
                            name="play"
                            color={GlobalColors.primaryColor}
                            size={18}
                          />
                          <Text>{item.lessons} Lessons</Text>
                        </View>

                        <View style={GlobalStyles.flexRow}>
                          <IonIcon
                            name="time"
                            color={GlobalColors.primaryColor}
                            size={18}
                          />
                          <Text>{item.duration} HRS</Text>
                        </View>
                      </View>
                      <Text style={styles.h3}>{item.title}</Text>
                    </View>
                  </Pressable>
                );
              })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  h1: {fontSize: 24, color: GlobalColors.blackColor, fontWeight: '600'},
  h2: {fontSize: 20, color: GlobalColors.blackColor, fontWeight: '600'},
  h3: {fontSize: 16, color: GlobalColors.blackColor, fontWeight: '500'},
  homeWrapper: {
    padding: 10,
    backgroundColor: GlobalColors.whiteColor,
    gap: 20,
    flex: 1,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: GlobalColors.grayColor,
    margin: 3,
  },
  brandContainer: {
    padding: 10,
    backgroundColor: GlobalColors.primaryLightColor,
    borderRadius: 10,
  },
  categoryContainer: {
    marginRight: 20,
  },
  courseContainer: {marginBottom: 20},
});
