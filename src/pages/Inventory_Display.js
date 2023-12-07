import { React } from "react";

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
  Button,
  Dimensions,
  Alert,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import AddButton from "../components/Addbutton";

import Form from "./Form";
import { SafeAreaView } from "react-native-safe-area-context";

var { height, width } = Dimensions.get("window");

export default function Home(props) {
  const [modal, setModal] = useState(false);
  const items_arr = useSelector((state) => state.item.items);

  function setModalVisibility() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: width / 2,
          backgroundColor: "transparent",
        }}
      >
        <Text style={styles.welcomeText}>
          Welcome {props.userInfo.user.givenName}!
        </Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={props.logout}
          title="Logout"
        >
          <Text style={{ color: "white" }}>
            <AntDesign name="logout" size={18} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={{
          uri: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5vdGVzfGVufDB8fDB8fHww",
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.title}>
            <Title title="Your Inventory" colour="white" border="white" />
          </View>
          <Form modalVisible={modal} closeModal={closeModal} />
          {items_arr.map((item, key) => (
            <View key={item.name.toString()}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.itemContainer}
                  source={{
                    uri: item.image,
                  }}
                />
                <View style={styles.descContainer}>
                  <Text style={styles.imageDescription}>{item.name}:</Text>
                  <Text
                    style={{
                      flexGrow: 1,
                      color: "black",
                      marginLeft: 10,
                      fontSize: 19,
                    }}
                  >
                    {item.date}
                  </Text>
                  <Pressable
                    style={{ paddingRight: 5 }}
                    onPress={() => {
                      Alert.alert(
                        "Additional Info \n",
                        `Expected Maintenance Date: ${item.expectedDate} \n \nContractor Contact: ${item.contract}`
                      );
                    }}
                  >
                    <Ionicons
                      name="information-circle-outline"
                      size={24}
                      color="black"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
          <AddButton onPress={setModalVisibility} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  welcomeText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    alignSelf: "center",
  },
  logout: {
    alignSelf: "flex-end",
  },

  descContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  imageStyle: {
    opacity: 0.8,
  },
  imageDescription: {
    fontSize: 19,
    color: "black",
    fontWeight: "bold",
  },
  imageContainer: {
    width: 300,
    backgroundColor: "white",
    height: 200,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    margin: 20,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  itemContainer: {
    width: 300,
    flex: 1,
    resizeMode: "contain",
    height: 160,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "center",
    paddingBottom: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    marginTop: 50,
    marginBottom: 40,
    alignItems: "center",
  },
  addBtn: {
    border: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: 50,
    height: 50,
    borderColor: "black",
    backgroundColor: "white",
  },
});
