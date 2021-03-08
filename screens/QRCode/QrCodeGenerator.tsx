import React, { useState, useEffect } from 'react';
import { StyleSheet, useColorScheme, Dimensions, Image } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Switch } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode-generator';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Header from '../Header';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function TabOneScreen(props: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  var colorScheme = useColorScheme();

  useEffect(() => {

  }, [props.navigation])



  return (
    <View style={styles.container}>
      <View style={[styles.row,{justifyContent:"space-between",backgroundColor:"transparent"}]}>   
      <View style={[styles.cardHook, {transform: [{ rotate: "-30deg" }]}]}><Text>           </Text></View>
      <View style={[styles.cardHook1, {transform: [{ rotate: "30deg" }]}]}><Text>           </Text></View>
 
    </View>

    
      <View style={styles.outerCard}>
        <View style={styles.outerCardHeader}>
          <View style={styles.circle}><Text>   </Text></View>
          <View style={styles.hook}><Text>                    </Text></View>
          <View style={styles.circle}><Text>   </Text></View>
        </View>

        <View style={styles.card} >
          <View style={styles.qrCode}>
            <QRCode
              value={"2"}
              size={width / 3 + 30}
              bgColor='black'
              fgColor='white' />
          </View>
          <View style={styles.cardContent}>
            <View style={[styles.cardContentsPart,{justifyContent:"space-evenly"}]}>
            <Avatar.Image
              source={{
                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }}
              size={50}
              style={{marginRight:50}}
            />
            
           <Text style={styles.cardText}>Akshat Lakshkar</Text>
           </View>
       

           <View style={[styles.cardContentsPart,{justifyContent:"space-evenly"}]}>
            
           <Text style={{color:"black",marginBottom:10,marginTop:15,marginRight:60,fontWeight:"bold"}}>Issued Date</Text>
           <Text style={{color:"black",marginBottom:10,marginTop:15,fontWeight:"bold"}}>30/06/2020</Text>
      
           </View>
       



       
           <View style={styles.cardContentsPart1}>
             <View style={styles.row}>
               <View style={{top:20,left:-40,marginRight:-22}}>
             <Ionicons name="md-fast-food" size={24} color="green"  /></View>
           <Text style={[styles.cardText,{paddingRight:50}]}>Paid</Text>
           </View>
           <View style={styles.row}>
               <View style={{top:20,left:-25,marginRight:-22}}>
             <Ionicons name="md-fast-food" size={24} color="red"  /></View>
           <Text style={styles.cardText}> Remaining</Text>
           </View>
           </View>
           
           <View style={styles.cardContentsPart}>
           <Text style={styles.cardText1}>₹1200</Text>
           <Text style={styles.cardText1}>₹1200</Text>
           </View>
          </View>


        </View>
      </View>



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF3F8"
  },
  mainTitle: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 20
  },
  circle: {
    backgroundColor: "#3890C6",
    borderRadius: 50,
    height: 20,
    width: 20,
    margin: 20,
  },
  hook: {
    backgroundColor: "#3890C6",
    borderRadius: 20,

  },
  cardContent: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: "107.5%",
    marginTop: 20,
    top: 10,
    display: "flex",
    flexDirection: "column"

  },
  cardContentsPart:{
  backgroundColor:"transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent:"space-around",
  
  },
  cardContentsPart1:{
    backgroundColor:"transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around",
    marginLeft:20
    },
  cardHook:{
    backgroundColor:"black",
    height:250,
    width:10,
    marginRight:width/2,
    top:-height/15,
    zIndex:200,
    borderRadius: 50,
    
  },
  cardHook1:{
    backgroundColor:"black",
    height:250,
    width:10,
    top:-height/15,
    zIndex:-200,
    borderRadius: 50,
   
  },

  cardText: {
    fontWeight: "bold",
    fontFamily: "serif",
    top:15,
    fontSize:15
  },
  
  cardText1: {
    fontFamily: "serif",
    top:15,
    fontSize:13,
    paddingRight:25
  },

  outerCard: {
    display:"flex",
    backgroundColor: "#95C4E1",
    width: width - 50,
    height: height / 2 + 120,
    borderRadius: 15,
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    top:-height/8,
    zIndex:10
  },


  outerCardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },

  card: {

    backgroundColor: "#3890C6",
    width: width - 100,
    height: height / 2,
    borderRadius: 15,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '800'
  },
  qrCode: {
    backgroundColor: "transparent",
    paddingTop: 16,
  },
  cardHeader: {
    width: width,
    height: height / 3 - 50,
    marginBottom: height / 3,
  },

  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",

  },
  amountCard: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",


  },
  title: {
    fontSize: 15,
    fontWeight: "bold",

  },
  caption: {
    fontSize: 15,
    fontWeight: "bold",
  }

});
