import { useEffect,React  } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable, ScrollView,Image,Button,Alert,ImageBackground} from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation ,useRoute} from '@react-navigation/native';
import AddButton from '../components/Addbutton';
import {LinearGradient} from 'expo-linear-gradient'
import Form from './Form';
let async_array=[]
export default function Home() {
  const [modal,setModal]=useState(false)
  const navigation=useNavigation();
  const items_arr=useSelector((state)=>state.item.items) 


    const [datastored, setRetrievedData] = useState(false);
  const [data,setData]=useState([])
    
  
    function goToForm(){
        navigation.navigate('Form')
    }
    function setModalVisibility(){
        setModal(true)
    }
    function closeModal(){
      setModal(false)
  }
  return (

       <LinearGradient style={styles.container} colors={['#1f1c18','#8e0e00']}>
   <ImageBackground imageStyle={styles.imageStyle} source={{uri:'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5vdGVzfGVufDB8fDB8fHww'}} resizeMode="cover" style={styles.container}>          
   <ScrollView>
      <View style={styles.title}>
      <Title title="Your Inventory"/></View>
       <Form modalVisible={modal} closeModal={closeModal}/>
     {items_arr.map((item)=>(
     <View style={styles.outerImageContainer}><View style={styles.imageContainer}>
     <Image style={styles.itemContainer}  source={{
      uri: item.image
    }}/><View style={styles.descContainer}><Text style={styles.imageDescription}>{item.name}:</Text><Text style={{flexGrow:1,color:'black', marginLeft:10,fontSize:19}} >{item.date}</Text><Pressable style={{paddingRight:5}}  onPress={()=>{Alert.alert('Additional Info \n',`Expected Maintenance Date: ${item.expectedDate} \n \nContractor Contact: ${item.contract}`)}}><Ionicons  name="information-circle-outline" size={24} color="black" /></Pressable></View></View></View> 

    ))}
        <AddButton onPress={setModalVisibility}/>
      

</ScrollView></ImageBackground></LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  descContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingTop:5
  },
imageStyle:{
  opacity:0
},
  imageDescription:{
    fontSize:19,
    color:'black',
    fontWeight:'bold',
  },
  imageContainer:{
    width:300,
    backgroundColor:'white',
    height:200,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    margin:20,
    elevation:2
  },
  itemContainer:{
    width:300,
    height:160,
    borderColor:'gray',
    borderWidth:1,
    alignSelf:'center',
    paddingBottom:15,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
 

  },
  title:{
    marginTop:100,
    marginBottom:40,
    alignItems:'center'
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
    backgroundColor:'white'
  }
});
