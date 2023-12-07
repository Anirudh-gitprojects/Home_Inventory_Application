import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert,Dimensions} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {
  GoogleSignin,
} from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Home from "./Inventory_Display";
var {height} = Dimensions.get('window');

// npx expo install @react-native-google-signin/google-signin
// npx expo install expo-dev-client

export default function GoogleAuth() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();
 const navigation=useNavigation();
  const configureGoogleSignIn = () => {
    GoogleSignin.configure({

      androidClientId:
        "947458477697-vhi5ndj2qslvgop5q4hu4s1in2q4okih.apps.googleusercontent.com",
      iosClientId:"[ios-id here]"
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  });
  
  const signIn = async () => {
    console.log("Pressed sign in");

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      setError();
    } catch (e) {
      Alert.alert('Erorr Message','Sign in canceled.')
    }
  };

  const logout = () => {
    setUserInfo(undefined);
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View style={styles.container}>

      {userInfo ? (
        <>
        <Home logout={logout} userInfo={userInfo}/>
        </>
      ) : (
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={signIn}>
        
        <View style={styles.btnDisplay}><Text style={styles.text}>Sign in with</Text><AntDesign name="google" size={24} color="black" /></View></TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    alignItems: "center", 
    justifyContent: "center",
    flex:height
  },
  btnDisplay:{
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  logout:{
    marginBottom:0,
    marginTop:65,
    alignSelf:'flex-end'
  },
  text:{
   
    color:'black',
    marginLeft:50,
    fontSize:16,
    alignSelf:'center',
  
  },
  googleBtn:{
    borderWidth:1,
    justifyContent:'center',
    width:300,
    borderRadius:20,
    height:50,
    backgroundColor:'ghostwhite',

  }
});