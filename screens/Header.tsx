import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native';

export default function Header() {
    var URL = "https://www.cheetay.pk/static/images/Tiffin-Banner1.jpg"
  
  return (

   <View style={styles.header}>
       <View style={styles.row}>
           <Ionicons name="location" color="black" size={23} style={styles.locationIcon}  />
           <TextInput
        placeholder="GWALIOR"
        inlineImageLeft={URL}
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        editable={false}
        style={{width:"100%",top:-4}}
      />
     </View>



       <View style={styles.input}>
        <Ionicons name="search" color="black" size={23} style={styles.searchIcon}/>
       <TextInput
        placeholder="Search"
        placeholderTextColor="black"
       underlineColorAndroid="transparent"
        style={{width:"100%",color:"black"}}
      />
      </View>

      <View style={[styles.row,{marginTop:20,marginLeft:4,width:"100%", marginBottom:20}]}>
       <View style={[styles.filterCard,{width:"15%"}]}>
           <Text style={styles.filterName}>Pro</Text>
       </View>
       <View style={styles.filterCard}>
           <Text style={styles.filterName}>Cuisine</Text>
       </View>
       <View style={[styles.filterCard,{width:"27%"}]}>
        <Text style={styles.filterName}>Rating 4.0+</Text>
       </View>
       <View style={styles.filterCard}>
           <Text style={styles.filterName}>Fastest</Text>
       </View>
      
      </View>

      </View>

  );
}

const styles = StyleSheet.create({
  
  header:{
  padding:5,
  paddingTop:40,
  backgroundColor:"#EDF3F8",
 
  },

  row: {
    display: "flex",
    flexDirection: "row"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  input:{
      padding:5,
      paddingLeft:10,
      borderRadius:80,
      borderWidth:1,
      borderColor:"lightgrey",
      display: "flex",
      flexDirection: "row",
  },
  searchIcon:{
      paddingRight:5,
  },
  locationIcon:{
    paddingRight:5,
    marginBottom:10
},
filterCard:{
    height:30,
    borderWidth:1,
    borderRadius:15,
    borderColor:"black",
    paddingHorizontal:10,
    paddingVertical:2,
    marginLeft:5,
    marginRight:5,
    width:"23%"
},
filterName:{
  color:"black"
}

});
