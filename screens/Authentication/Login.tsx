import { FontAwesome } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { View,Text ,StyleSheet, Dimensions} from 'react-native'
import { TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import {LinearGradient} from 'expo-linear-gradient'
import { useDispatch, useSelector } from "react-redux";
import {setLoginSuccess,loginUser} from '../../store/Actions/index'
import AsyncStorage from '@react-native-community/async-storage'
import  Modal  from 'react-native-modal'
import { Snackbar } from 'react-native-paper';
import axios from 'axios'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );


function Login({navigation}) {

    const dispatch = useDispatch();

       const[isError,setIsError]=useState(false)
       const[errorText,setErrorText]=useState("")
   
       const[isPasswordVisible,setIsPasswordVisible]=useState(false)
       const[email,setEmail]=useState("")
       const[password,setPassword]=useState("")

       const[state,setState]=useState({
            email:"",
            password:""
       })

       const[error,setError]=useState({
        email:"",
        password:""
   })


       const handleChange = (name:any,value:any) => {
        setState((st) => ({ ...st, [name]: value }));
        var err = error;
        switch (name) {
          case "email":
            err.email = validEmailRegex.test(value)
              ? ""
              : "Email is not valid!";
            break;
          case "password":
            err.password =
              value.length < 6 ? "Password must be at least 6 characters" : "";
            break;
          default:
            break;
        }
        setError({ ...err });
        setState((st) => ({ ...st, [name]:value }));
      };
  


    
    const loginHandler = () => {
        const validateForm = (error:any) => {
          let valid = true;
          Object.values(error).forEach((val:any) => val.length > 0 && (valid = false));
          return valid;
        };
        if (validateForm(error)) {
          checkValidity();
        } else {
            setErrorText("Login To Fail")
            setIsError(true)
        }
      };
    

    const checkValidity = () => {
        if (state["email"] === "" || state["password"] === "") {
            setErrorText("Fields Should not be empty")
            setIsError(true)
         } else {
            AsyncStorage.setItem("user",email)
            axios.post("http://192.168.20.110:8000/api/auth/login",state)
            .then((res) => {
              console.log(res)
              navigation.navigate('Root')
            }).
            catch(error=>console.log(error))
        
        }
      };
    




    return (
        <>
                <Snackbar
                 style={styles.snackbar}
                  visible={isError}
          onDismiss={() => setIsError(false)}
          action={{
            label: "close",
            onPress: () => {
                setIsError(false)
              },
          }}
        >
        <Text style={{fontSize:13}}>{errorText}</Text>    
        </Snackbar>
    
        <View style={styles.container}>
        
        <View style={styles.input}>
       <FontAwesome name="envelope" color="black" size={width/22} style={styles.searchIcon}/>
       <TextInput
       autoCompleteType="email"
       placeholder="Email"
       placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       keyboardType="email-address"
       defaultValue={state['email']}
       onChangeText={(text:any)=>handleChange('email',text)}
   
      />
     </View>
     <View>
     <Text style={styles.error}>
        {error.email}
     </Text>
              
     </View>
     
     <View style={styles.input}>
       <FontAwesome name="lock" color="black" size={width/22} style={styles.searchIcon}/>
      <TextInput
       placeholder="Password"
       placeholderTextColor="grey"
       underlineColorAndroid="transparent"
       style={styles.textInput}
       secureTextEntry={!isPasswordVisible}
       defaultValue={state['password']}  
       onChangeText={(text:any)=>handleChange('password',text)}
  
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
    <Text style={styles.error}>
        {error.password}
     </Text>
             

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
     </>
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

      error:{
          color:"red",
          fontSize:10,
          position:"relative",
          top:-5,
          left:-10
      },
      snackbar:{
          backgroundColor:"red",
          borderRadius:20,
          fontSize:10
      }
})
