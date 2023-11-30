import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Title({title}) {
  return (
    <View style>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:'white',
    fontSize:25,
    borderWidth:2,
    padding:10,
    borderRadius:20,
    borderColor:'white',
    width:200,
    textAlign:'center'
  },

});
