import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export default function AddButton({onPress}) {
  return (

    <View style={styles.inputContainer}>
    <Pressable onPress={onPress} style={styles.addBtn}><Ionicons name='md-add' size={24} color="black"/></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  inputContainer:{
    marginBottom:20
  },
  
  addBtn:{
    border:1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:40,
    width:50,
    height:50,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'white'
  }
});
