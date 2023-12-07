
import { StyleSheet, View} from 'react-native';
import GoogleAuth from './GoogleAuth';

import Apple_Auth from './AppleAuth';


export default function Login() {


  return (

    <View style={styles.container}>
      
        <GoogleAuth/>
        <Apple_Auth/>
        </View>
  );
}

const styles = StyleSheet.create({
    container:{
     flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#20002c',
    },


});
