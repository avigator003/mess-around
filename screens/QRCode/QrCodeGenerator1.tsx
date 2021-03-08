import React, { useState, useEffect } from 'react';
import { StyleSheet, useColorScheme, Dimensions, Image } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Switch } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode-generator';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button, Card, Title, Paragraph, TouchableRipple } from 'react-native-paper';
import Header from '../Header';
import { Ionicons } from '@expo/vector-icons';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import Calendar from 'react-native-calendar'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const customStyle = {
  day: {fontSize: 15, textAlign: 'center',  color:"black"},
  controlButtonText: {
    color: 'blue',
  },
  hasEventCircle: {
    backgroundColor: 'lightgreen',
  },
  hasEventText:{
    color:"black",
    fontWeight:"bold"
  },
  currentDayText: {
    color: 'black',
  },
}



export default function TabOneScreen(props: any) {
  const [isVisible, setIsVisible] = useState(false);


 const calendarHandler=()=>{
   setIsVisible(true)
 }



  return (
    <View style={styles.container}>
   <Modal isVisible={isVisible} animationIn="flipInY" animationInTiming={3000} 
   animationOut="flipOutY" animationOutTiming={2000}
   onBackdropPress={() =>setIsVisible(false)}>
        <View style={styles.modal} >
          <View style={styles.calendar}>
        <Calendar
        current={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2012-05-30'}
          // Initially visible month. Default = Date()
          customStyle={customStyle}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          eventDates={['2020-11-01', '2020-11-07']}
          showEventIndicators={true} 
          onDateSelect={(date) => console.log(date)} // Callback after date selection
 
          onDateLongPress={(date) =>console.log(date)}
          scrollEnabled={false}   
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          // Do not show days of other months in month page. Default = false
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          showControls={true} 
        />
        </View>
        </View>
      </Modal>
      <View style={styles.card} >
      <TouchableNativeFeedback onPress={()=>calendarHandler()}>
          <Text style={styles.seperatorText}>
           My Diets >>
          </Text>
          </TouchableNativeFeedback>
    
        <View style={styles.topCard}>
        <Avatar.Image
              source={{
                uri: 'https://www.cheetay.pk/static/images/Tiffin-Banner1.jpg'
              }}
              
              size={height/5}
              style={{marginRight:50,marginBottom:height/30}}
            />
          
        <Text style={[styles.text,{left:-8}]}>MAMA CHICKEN CENTER</Text>
      </View>

        <View style={styles.middleCard}>
            <Text style={styles.text}>Issued Date: 23/06/2000</Text>
        </View>
        <View style={styles.lowerCard}>
          <View  style={styles.amountRow}>
        <Text style={styles.text1}>Paid  </Text>
        <Text style={styles.text1}>Remaining</Text>
        </View>
        </View>
        <View style={styles.lowerCard1}>
          <View  style={styles.amountRow}>
        <Text style={styles.text2}>Rs.1200</Text>
        <Text style={styles.text2}>Rs.1200</Text>
        </View>
        </View>




        <View style={styles.seperator}>
          </View>

        <View style={styles.qrCode}>
          <QRCode
            value={"2"}
            size={width / 3 + 30}
            bgColor='black'
            fgColor='white'

          />
        </View>

      </View>


      <View style={styles.circleRow}>
        <View style={styles.circle}>
          <Text>         </Text>
        </View>


        <View style={styles.circle}>
          <Text >         </Text>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height / 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDF3F8",
   
  },
  circle: {
    borderRadius: 50,
    backgroundColor: "#EDF3F8",
    height: width / 7,
    width: width / 7,
    marginRight: width / 3 - 10,
    marginLeft: width / 3 - 10,
    marginTop: height / 3
  },
  card: {
    backgroundColor: "#202324",
    width: width - 100,
    height: height - 100,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 0,

  },
  seperator: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: height / 3 - 50,

  },
  
  modal: {
    backgroundColor: "white",
    width: width,
    borderRadius: 15,
    padding: 3,
    left:-20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 50, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 5,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    height:height/3,
    marginBottom: 30,
    alignItems:"center",
    justifyContent:"center"
  },
  calendar:{
flex:1,
width: width,
height:"100%",
top:-8
  
  },

  
  seperatorText: {
    color: "lightgrey",
    fontSize: width /38,
    fontFamily: "sans-serif",
    marginBottom:10,
    fontWeight:"bold",
    borderWidth:1,
    borderColor:"#356DF6",
    padding:6,
    paddingHorizontal:15,
    borderRadius:50,
    marginLeft:width/2-12,
    backgroundColor:"#356DF6"

  },

  qrCode: {
    backgroundColor: "transparent",
    paddingTop: 16,
    position: "absolute",
    bottom: height / 30,


  },
  topCard:{
    marginTop:height/40,
    marginLeft:width/8,
    backgroundColor: "transparent",
  },
  middleCard:{
    backgroundColor: "transparent",
    marginTop:height/20,
  },
  lowerCard:{
    backgroundColor: "transparent",
    marginTop:height/20,
 
  },
  lowerCard1:{
    
    backgroundColor: "transparent",
    marginTop:height/80,
 
  },
  text:{
    color:"white",
    fontSize:width/25,
    fontFamily:"monospace",
    fontWeight:"bold"
  },
  text1:{
    color:"white",
    fontSize:width/25,
    fontFamily:"monospace",
    fontWeight:"bold",
    marginRight:width/10,
    marginLeft:width/10,
  },
  text2:{
    color:"white",
    fontSize:width/35,
    fontFamily:"monospace",
    marginRight:width/6,
    marginLeft:width/9,
  },
  circleRow: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    zIndex: 50,


  },

  amountRow:{
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
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


});
