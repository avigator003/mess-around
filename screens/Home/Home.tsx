import { Ionicons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,Animated} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import { RootNavigator } from '../../navigation';
import { RootStackParamList } from '../../types';
import { useSelector} from "react-redux";

const FadeInView = (props:any) => {
  
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  var URL = "https://www.cheetay.pk/static/images/Tiffin-Banner1.jpg"
   
   
  return (

<FadeInView style={styles.mainContainer} >

<Header/>

    <ScrollView >
      <View style={styles.container}>
        {
          [...Array(6)].map(x =>

            <View style={styles.card}>
              <Image source={{ uri: URL }} style={styles.image} />

              <View style={styles.content}>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                  <Text style={styles.messName}>Mama Chicken Center</Text>
                  <Text><Ionicons size={15} name="star-sharp" />3.4/5</Text>
                </View>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                  <Text style={styles.messType}>North Indian</Text>
                  <Text style={styles.messPrice}>₹150 for one</Text>
                </View>
                <View style={[styles.row, { justifyContent: "space-between" }]}>
                  <Text style={styles.messTiming}>Opens at 08:00 am</Text>

                </View>
              </View>
            </View>
          )
        }
      </View>
    </ScrollView>
    
    </FadeInView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    padding: 0,
    backgroundColor:"#EDF3F8"
  },
  header:{
  padding:100
  },
  image: {
    width: "100%",
    height: 180,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },

  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },

  card: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 15,
    padding: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    marginBottom: 30
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800'
  },
  content: {
    padding: 10
  },
  messName: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  messType: {
    fontSize: 12,
    color: "grey",
    marginTop: 5
  },
  messTiming: {
    fontSize: 12,
    color: "red",
    marginTop: 5
  },
  messPrice: {
    fontSize: 12,
    color: "grey",
    marginTop: 5
  },
});
