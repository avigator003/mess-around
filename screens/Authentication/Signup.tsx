import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View,Text ,StyleSheet, Dimensions} from 'react-native'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

function Signup() {
    const[isPasswordVisible,setIsPasswordVisible]=useState(false)

    return (
        <View style={styles.container}>

     <View style={styles.input}>
        <FontAwesome name="user" color="black" size={width/22} style={styles.searchIcon}/>
       <TextInput
        placeholder="Username"
        placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       autoCompleteType="off"
       />
      </View>
      
     
      <View style={styles.input}>
        <FontAwesome name="envelope" color="black" size={width/22} style={styles.searchIcon}/>
       <TextInput
        placeholder="Email"
        placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       autoCompleteType="off"
       keyboardType="email-address"
   
       />
      </View>
      
      <View style={styles.input}>
        <FontAwesome name="lock" color="black" size={width/22} style={styles.searchIcon}/>
       <TextInput
        placeholder="Password"
        placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       autoCompleteType="off"
       secureTextEntry={!isPasswordVisible}
     />
     {
        isPasswordVisible?
        <TouchableOpacity onPress={()=>setIsPasswordVisible(!isPasswordVisible)}>
       <FontAwesome name="eye" color="black" size={width/22} style={styles.eye}/>
       </TouchableOpacity>:
        <TouchableOpacity onPress={()=>setIsPasswordVisible(!isPasswordVisible)}>
        <FontAwesome name="eye-slash" color="black" size={width/22} style={styles.eye}/>
          </TouchableOpacity>
     }
      </View>
      
      
     
      <View style={styles.input}>
        <FontAwesome name="phone" color="black" size={width/22} style={styles.searchIcon}/>
       <TextInput
        placeholder="Mobile"
        placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       autoCompleteType="off"
       keyboardType="phone-pad"
       />
      </View>
      <TouchableWithoutFeedback style={styles.button}>
       <Text style={styles.buttonText}>Sign Up</Text>
       <LinearGradient   colors={['#FC575E', '#F7B42C']} style={styles.searchIcon1}>
           <FontAwesome name="arrow-right" color="white" size={width/20} />
       </LinearGradient>
   </TouchableWithoutFeedback>

<View style={styles.footer}>
   <Text style={styles.footerText}>or create account using social media</Text>
   <View style={styles.row}>
       
   <View style={[styles.icon,{backgroundColor:"#314266"}]}>
   <FontAwesome name="facebook-f" color="white" size={width/25} />
   </View>
      
 
   <View style={[styles.icon1,{backgroundColor:"#40BCC8"}]}>
         <FontAwesome name="twitter" color="white" size={width/25} />
   </View>
   
  
   <View style={[styles.icon2,{backgroundColor:"#FB5F5E"}]}>
   <FontAwesome name="google-plus" color="white" size={width/25} />
   </View>
   </View>
</View>


      </View>
 
    )
}

export default Signup
const styles = StyleSheet.create({
container:{
    alignItems:"center",
    justifyContent:"center",},

    input:{
        padding:5,
        paddingLeft:10,
        borderRadius:80,
        borderWidth:1,
        borderColor:"lightgrey",
        display: "flex",
        flexDirection: "row",  
        shadowColor: '#000',
        shadowOffset: { width: 50, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        width:width-70,
        marginVertical:height/100
      
    },
    searchIcon:{
        paddingRight:width/20,
        top:5
    },
    
searchIcon1:{
    padding:width/60,
    paddingHorizontal:width/30,
    borderRadius:15,
    
},
button:{
    display:"flex",
    flexDirection:"row",
    left:width/4
},buttonText:{
    color:"black",
    fontFamily:"sans-serif",
    fontWeight:"bold",
    fontSize:width/17,
    paddingRight:width/30
},
textInput:{
    width:width/2+50,
    color:"black",
    fontFamily:"monospace",
    fontWeight:"bold",
    fontSize:width/35
},

eye:{   paddingRight:width/20,
    marginTop:5},
row:{

    display:"flex",
    flexDirection:"row",
},
footer:{
    marginTop:height/25,
    display:"flex",
    flexDirection:"column"
    },
icon:{
    marginHorizontal:width/15,
    borderRadius:22,
    backgroundColor:"red",
    padding:width/40,
    paddingHorizontal:width/30
},
icon1:{
    marginHorizontal:width/15,
    borderRadius:22,
    backgroundColor:"red",
    padding:width/40,
    paddingHorizontal:width/40
},
icon2:{
    marginHorizontal:width/15,
    borderRadius:22,
    backgroundColor:"red",
    padding:width/45,
    paddingHorizontal:width/45
},
footerText:{
    fontFamily:"monospace",
    fontWeight:"bold",
    fontSize:width/30,
    marginBottom:height/40
}
    })
    