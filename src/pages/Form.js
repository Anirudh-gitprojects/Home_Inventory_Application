import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View ,Modal, TouchableHighlight, TouchableOpacity} from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import InputField from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from '../components/Imagepicker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { addItem,removeItem } from '../../redux/itemSlice';
import {LinearGradient} from 'expo-linear-gradient'
import ExitButton from '../components/exit';
let async_array=[]
export default function Form({modalVisible,closeModal}) {
  const navigation=useNavigation();
  const [name,setName]=useState('')
  const [date,setDate]=useState('')
  const [expectedDate,setExpectedDate]=useState('')
  const [image,setImage]=useState('')
  const [contract,setContract]=useState('')

  const dispatch=useDispatch();
  const items_arr=useSelector((state)=>state.item.items) 
 


  function addToReducer(){
    if(!image || !name || !date || !expectedDate || !contract){
      alert('Required fields cannot be empty!')}
    else{
    dispatch(addItem( { image: image,name:name,date:date,expectedDate:expectedDate,contract:contract}));
    closeModalVisibility();
    setName('')
    setDate('')
    setExpectedDate('')
    setContract('')
    setImage('')
  }}
  function closeModalVisibility(){
    closeModal();
  }
  return (
    <LinearGradient  colors={['#20002c', '#cbb4d4']}>
   <Modal propagateSwipe animationType='slide' visible={modalVisible}>
    
          <ScrollView>
          <ExitButton style={styles.exitBtn}  onPress={closeModalVisibility}/>
          <View style={styles.container} >
      <Title title="Add Items"/>
      <View style={styles.btnContainer}>
      <InputField placeholder="Enter name" label="Item name *" value={name}  setValue={setName} />
      <InputField placeholder="Enter Installment Date" label="Installment Date *" value={date}   setValue={setDate}  />
      <InputField placeholder="Enter Maintenance Date" label="Expected Maintenance Date *"  value={expectedDate}   setValue={setExpectedDate} />
      <InputField placeholder="Enter contact" label="Contractor contact (optional)"  value={contract}   setValue={setContract} /></View>
    
      <ImagePicker setImageval={setImage} />
      <TouchableOpacity style={styles.submitBtn} onPress={addToReducer}><Text style={{color:'black',fontWeight:'bold'}}>Add Item</Text></TouchableOpacity>
    </View></ScrollView></Modal></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',

  },
  submitBtn:{
    borderWidth:1,
    backgroundColor:'white',
    padding:10,
    margin:10,
    width:'30%',
    textAlign:'center',
    alignItems:'center',
    borderRadius:20
  },
  exitBtn:{
    alignSelf:'flex-end',
    margin:5,
    padding:20
    
  }
  
});