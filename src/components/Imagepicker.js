import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View,Button ,Image,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import {launchCameraAsync,useCameraPermissions,PermissionStatus,launchImageLibraryAsync } from 'expo-image-picker';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';import { useEffect } from 'react';
import AddButton from './Addbutton';
function ImagePicker({setImageval}){

    const [cameraPermissionInformation,requestPermission]=useCameraPermissions();
    const [image,setImage]=useState('')
    useEffect(()=>{
        setData();
    },[image])
    function setData(){
        setImageval(image)
    }
    useEffect(()=>{
        console.log(image)
    },[image])
    async function takeImageHandler(){
        const hasPermission=await verifyPermissions();
        if(!hasPermission){
            return;
        }
        const result=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5,
        })
        console.log(image)
        if(!result.canceled){
        setImage(result.assets[0].uri)
        }
        else{
          alert('You did not select any image.');

        }
    }
	const pickImageAsync = async () => {
        let result = await launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        }); 
    
        if (!result.canceled) {
          console.log(result);
          setImage(result.assets[0].uri);
      

        } else {
          alert('You did not select any image.');
        }
      };
    async function verifyPermissions(){
        if(cameraPermissionInformation.status===PermissionStatus.UNDETERMINED){
            const permissionResponse=await requestPermission();
            return permissionResponse.granted;
        }
        if(cameraPermissionInformation.status===PermissionStatus.DENIED){
            Alert.alert('Insufficient Permissions!','You need to grant permission to use the camera.')
            return false;
        }
        return true;
    }
    let imagePicked=<Text style={{textAlign:'center'}}>Choose an image</Text>
    if(imagePicked)<Text><AddButton onPress={takeImageHandler}/></Text>
    if (image){
        imagePicked=<Image source={{uri:image}} style={styles.image}/>
        setImageVal=image
    }
    return(
      <ScrollView>
  
            <View style={styles.inputContainer}>
            <View style={styles.cameraContainer}><TouchableOpacity onPress={takeImageHandler}><Fontisto style={styles.cameraIcon} name="camera" size={24} color="black" /></TouchableOpacity>
            <Text style={{padding:4}}>Take Image</Text></View>
            <View style={styles.pickImage}><TouchableOpacity onPress={pickImageAsync}><MaterialCommunityIcons style={styles.imageIcon} name="file-upload" size={30} color="black" /></TouchableOpacity><Text>Upload Image</Text></View>
        </View>
      
    
        </ScrollView>
    )
}

export default ImagePicker;
const styles = StyleSheet.create({

  inputContainer:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
    marginVertical:20,
    marginHorizontal:30

  },
  cameraIcon:{
    borderWidth:1,
    padding:10,
    borderRadius:50 
  },
  imageIcon:{
    borderWidth:1,
    padding:10,
    borderRadius:50 
  },
  pickImage:{
    marginHorizontal:100,
 
    borderRadius:50,
    height:'100%',
    padding:20,
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
  },
  addBtn:{
    border:1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:40,
    width:50,
    height:50,
    borderColor:'black',
    backgroundColor:'purple'
  },
  imageContainer:{
    width:100,
    height:100,
    borderWidth:1,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  image:{
    width:'100%',
    height:'100%'
  },
  cameraContainer:{

    borderRadius:50,
    height:'100%',
    padding:20,
    justifyContent:'center',
    alignItems:'center',
  }
});
