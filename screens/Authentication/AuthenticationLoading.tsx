import AsyncStorage from '@react-native-community/async-storage'
import React,{useEffect, useState} from 'react'
import { View ,ActivityIndicator} from 'react-native'

function AuthenticationLoading(props:any) {
   
  const[user,setUser]=useState()
  
  useEffect(()=>{
     const getUser=async()=>{
     const currentUser=await AsyncStorage.getItem("user")
     console.log(currentUser)
     if(currentUser===null)
      props.navigation.navigate("Auth")
     else
      props.navigation.navigate("Root")
   }
   getUser()
  },[])

return (
  <View>
    <ActivityIndicator/>
  </View>
);
}


export default AuthenticationLoading
