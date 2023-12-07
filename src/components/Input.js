
import {  StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputField({label,placeholder,setValue,value,keyboardType,autoCapitalize}) {
  return (

    <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>{label}</Text>
      <TextInput onChangeText={(text)=>setValue(text)}  value={value} fontSize={15} autoCapitalize={autoCapitalize} placeholderTextColor="black"  keyboardType={keyboardType}  placeholder={placeholder} style={styles.inputArea}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:'white',
    fontWeight:'bold',  
    fontSize:25,
 
  },
  inputContainer:{
    marginBottom:20,
    color:'white',
  },
  textLabel:{
    textAlign:'left',
    fontSize:18,
    padding:10,
    color:'white',
  

    marginVertical:2
  } ,   
  inputArea:{
    width:270,
    backgroundColor:'white',
    color:'black',
    borderRadius:50,
    borderColor:'black',
    height:50,
    borderWidth:2,
    textAlign:'center',
  }
});
