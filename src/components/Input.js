import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputField({label,placeholder,setValue,value}) {
  return (

    <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>{label}</Text>
      <TextInput onChangeText={(text)=>setValue(text)}  value={value} placeholder={placeholder} style={styles.inputArea}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:'black',
    fontSize:25,
  },
  inputContainer:{
    marginBottom:20
  },
  textLabel:{
    textAlign:'left',
    fontSize:20,
    padding:10,
    marginVertical:2
  } ,   
  inputArea:{
    width:300,
    borderRadius:50,
    height:50,
    borderWidth:2,
    textAlign:'center',
  }
});
