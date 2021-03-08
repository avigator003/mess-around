import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { View,Text ,StyleSheet, Dimensions} from 'react-native'
import { TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'
import { useDispatch, useSelector } from "react-redux";
import {setLoginSuccess} from '../../store/Actions/index'
import AsyncStorage from '@react-native-community/async-storage'
import  Modal  from 'react-native-modal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


function Login({navigation}) {

    const dispatch = useDispatch();

    const[errorText,setErrorText]=useState("")
       const[isError,setIsError]=useState(false)
   
       const[isPasswordVisible,setIsPasswordVisible]=useState(false)
       const[email,setEmail]=useState("")
       const[password,setPassword]=useState("")


       const loginHandler=()=>{
         if(email==(null || "") || password==(null || ""))
         {
             console.log("email",email,password)
             setErrorText("All Fields Are required")
             setIsError(true)
             setTimeout(()=>{
                 setIsError(false)
             },3000)
         }
         else{

        AsyncStorage.setItem("user",email)
        dispatch(
            setLoginSuccess(email))
            navigation.navigate('Root')
       }

    }

    return (
        <View style={styles.container}>
          <Modal isVisible={isError} hasBackdrop={false} animationIn="zoomIn" animationInTiming={1000} animationOut="zoomOut" animationOutTiming={1000}>
        <View style={styles.card}> 
         <Text style={styles.errorText}>{errorText}</Text>
       </View>
          </Modal>
       <View style={styles.input}>
       <FontAwesome name="envelope" color="black" size={width/22} style={styles.searchIcon}/>
      <TextInput
      autoCompleteType="email"
       placeholder="Email"
       placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       keyboardType="email-address"
       defaultValue={email}
       onChangeText={(text:any)=>setEmail(text)}
   
   />
     </View>
     
     <View style={styles.input}>
       <FontAwesome name="lock" color="black" size={width/22} style={styles.searchIcon}/>
      <TextInput
       placeholder="Password"
       placeholderTextColor="grey"
      underlineColorAndroid="transparent"
      style={styles.textInput}
      secureTextEntry={!isPasswordVisible}
      defaultValue={password}
      onChangeText={(text:any)=>setPassword(text)}
  
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

   <TouchableOpacity style={styles.button} onPress={()=>loginHandler()}>
       <Text style={styles.buttonText}>Sign In</Text>
       <LinearGradient   colors={['#FC575E', '#F7B42C']} style={styles.searchIcon1}>
           <FontAwesome name="arrow-right" color="white" size={width/20} />
       </LinearGradient>
   </TouchableOpacity>


   <View style={styles.footer}>
   <Text style={styles.footerText}>or login using social media</Text>
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

export default Login

const styles = StyleSheet.create({
    container:{
        
        alignItems:"center",
        justifyContent:"center"},

    
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
    marginVertical:height/50
  
},
searchIcon:{
    paddingRight:width/20,
    marginTop:5
},
eye:{   paddingRight:width/20,
    marginTop:5},
    
close:{   
},

searchIcon1:{
    padding:width/60,
    paddingHorizontal:width/30,
    borderRadius:15,
    
},
button:{
    display:"flex",
    flexDirection:"row",
    marginLeft:width/2
},
buttonText:{
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
    fontSize:width/35,
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
    marginBottom:height/40,
    marginLeft:width/15
},
footer:{
    marginTop:height/25,
    display:"flex",
    flexDirection:"column"
    },
    row:{

        display:"flex",
        flexDirection:"row",
    },
    card: {
        backgroundColor: "red",
        width: "100%",
        borderRadius: 15,
        padding: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 50, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        marginBottom: 5,
        height:height/20,
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        position:"absolute",
        top:0,
      },
      errorText:{
          color:"white",
          fontWeight:"bold"
      }
})
