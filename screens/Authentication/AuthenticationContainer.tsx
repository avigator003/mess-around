import React, { useEffect, useRef, useState } from 'react'
import { View,Text,Dimensions,StyleSheet, ImageBackground,Animated, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import  Modal  from 'react-native-modal'
import ReactNativeSegmentedControlTab from 'react-native-segmented-control-tab'
import Login from './Login'
import Signup from './Signup'
import FlipCard from 'react-native-flip-card';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height



const image = require('../../assets/images/background.png');


function AuthenticationContainer(props:any) {
   
    const[selectedIndex,setSelectedIndex]=useState()
    const [flipped, setFlipped] = useState(false);
    

    const handleIndexChange = (index:any) => {
     
      setTimeout(function(){ 
        setSelectedIndex(index)
     
        setFlipped(!flipped)
     
 }, 200);
       
      };
    return (
   
    <KeyboardAvoidingView 
    behavior="padding" style={[styles.container]} > 

<TouchableWithoutFeedback  style={{height:height}} onPress={Keyboard.dismiss} accessible={false}>
<FlipCard 
  style={styles.card}
  friction={2}
  perspective={500}
  flipHorizontal={true}
  flipVertical={false}
  flip={flipped}
  clickable={false}
>

  <View 
  
  style={styles.face}>
  <ReactNativeSegmentedControlTab
          borderRadius={50}
          values={['Login', 'Signup', ]}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleIndexChange}
          tabTextStyle={styles.tabStyleText}
          activeTabTextStyle={styles.activeTabStyleText}
     />
<Login navigation={props.navigation}/>
  </View>
  <View style={styles.back}>
  <ReactNativeSegmentedControlTab
        borderRadius={50}
          values={['Login', 'Signup', ]}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleIndexChange}
          tabTextStyle={styles.tabStyleText}
          activeTabTextStyle={styles.activeTabStyleText}
     />
<Signup/>
    </View>
</FlipCard>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>


    )
}

export default AuthenticationContainer


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems:"center",
      backgroundColor: "transparent"
      
    },
    authenticationContainer:{
      top:20,
      alignItems:"center"
    },
    tabStyle: {
        padding:0,
        backgroundColor:"transparent",
        marginBottom:height/30
      },
      tabStyleText:{
          color:"black",
          padding:0,
          fontWeight:"bold"
      },
      activeTabStyle: {
        backgroundColor: "blue",
        color:"white"
      },
      activeTabStyleText:{
        borderBottomWidth:2,
        borderBottomColor:"transparent",
        borderEndWidth:width/2-30,
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
      
      },
      
  card: {
    flex:1,
    borderRadius:15,
    width:width-50,
    padding: 0,
    marginBottom: 5,
    marginTop: height/4-30,
    display: "flex",
    
   },
  face:{
    flex:1,
    height:"100%",
    width:"100%",
  },
  back:{
    borderRadius: 15,
    height:"100%",
    width:"100%",
      
  },

      
      image: {
        padding:height/18,
        flex:1
      },
  
  
  });
  