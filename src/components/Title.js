
import { StyleSheet, Text, View } from 'react-native';

export default function Title({title,colour,backgroundColor,border}) {
  console.log(colour)

  return (
    <View style>
      <Text style={[styles.title,{color:`${colour}`,backgroundColor:backgroundColor,borderColor:border}]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {

    fontSize:25,
    borderWidth:2,
    marginBottom:10,
    padding:10,
    borderRadius:20,

    width:200,
    textAlign:'center'
  },

});
