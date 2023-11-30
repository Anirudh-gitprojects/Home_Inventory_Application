import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';export default function AddButton({onPress,style}) {
  return (

    <View>
    <Pressable onPress={onPress} style={style}><MaterialCommunityIcons name="window-close" size={24} color="black" /></Pressable>
    </View>
  );
}

