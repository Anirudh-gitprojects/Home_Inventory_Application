
import { ScrollView, StyleSheet, Text, View ,Modal, TouchableOpacity} from 'react-native';
import Title from '../components/Title';
import {  useState } from 'react';
import InputField from '../components/Input';
import ImagePicker from '../components/Imagepicker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from '../../redux/itemSlice';
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
    if(!image || !name || !date || !expectedDate || !contract || contract==NaN  ){ 
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
   
   <Modal   propagateSwipe animationType='slide' visible={modalVisible}>
 <LinearGradient  colors={['#cbb4d4','#20002c']}>
          <ScrollView >
          <ExitButton style={styles.exitBtn}  onPress={closeModalVisibility}/>
          <View style={styles.container} >
      <Title title="Add Items" colour="black" border="black" backgroundColor="white" />
  
      <View style={styles.btnContainer}>
      <InputField placeholder="Enter name" label="Item name *" value={name}  setValue={setName} autoCapitalize="words" />
      <InputField placeholder="Enter Installment Date" label="Installment Date *" value={date}   setValue={setDate}  />
      <InputField placeholder="Enter Maintenance Date" label="Expected Maintenance Date *"    value={expectedDate}   setValue={setExpectedDate} />
      <InputField placeholder="Enter contact" label="Contractor contact (optional)"  keyboardType="number-pad"  value={contract}   setValue={setContract} /></View>
    
      <ImagePicker setImageval={setImage} />
      <TouchableOpacity style={styles.submitBtn} onPress={addToReducer}><Text style={{color:'white',fontWeight:'bold'}}>ADD</Text></TouchableOpacity>
    </View></ScrollView></LinearGradient></Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',  

    
    marginVertical:20
  
  },
  submitBtn:{
    borderWidth:1,
    backgroundColor:'#20002c',
    padding:10,
    borderColor:'white',
    
    width:'20%',
  
    textAlign:'center',
    alignItems:'center',
    borderRadius:20
  },
  exitBtn:{
    alignSelf:'flex-end',
    margin:5,
    padding:20,
    
  }
  
});