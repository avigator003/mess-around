import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import  * as Updates from 'expo-updates'



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


export default function Account(props: any) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <View style={styles.drawerSection}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('AuthenticationContainer') }}style={styles.drawerItem}>
                        <View style={styles.icon} >    
                             <Icon
                                    name="home-outline"
                                    color={"grey"}
                                    size={width/15}
                                />
                        </View>
                            <Text style={styles.drawerText}>Home</Text>
                    </TouchableOpacity>
                 </View>

                 
                </View>
            </ScrollView>
            <View style={styles.bottomDrawerSection}>
            <TouchableOpacity onPress={() => { AsyncStorage.clear()
                  props.navigation.navigate('AuthenticationNavigator',{screen: 'AuthenticationContainer'})
        }}style={styles.drawerItem}>
                        <View style={styles.icon} >    
                             <Icon
                                    name="exit-to-app"
                                    color={"grey"}
                                    size={width/15}
                                />
                        </View>
                            <Text style={[styles.drawerText]}>Sign Out</Text>
                    </TouchableOpacity>
                 
            </View>
      
           
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
     flex:1,
     padding:width/20,
     paddingTop:height/10
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        alignItems:"center",
        backgroundColor:"white"
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawerItem:{
        display:"flex",
        flexDirection:"row",
        marginLeft:width/15,
    },
    drawerText:{
        fontSize:width/28,
        fontFamily:"monospace",
        marginTop:height/400
    },
    icon:{
     marginRight:width/15,
    }
});