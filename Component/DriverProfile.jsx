import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";
import { Card } from "react-native-shadow-cards";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";

export const Travellers = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <View style={[styles.container, styles.color1, styles.color2, styles.color3]}>
      <View style={styles.navContainer2}>
        <Card style={styles.card}>
          <View style={styles.header}>
            {!imageError ? (
              <Image
                resizeMode="cover"
                source={{
                  uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c59ce7e5619d5786d53ef0f0515730b784afcaa6d3f9c71ebd0b0c91af210b?apiKey=6e819305aff14a71a524c5abb40332f8&",
                }}
                style={styles.avatar}
                onError={handleImageError}
              />
            ) : (
              <Text style={styles.errorText}>Error loading image</Text>
            )}

            <View style={styles.greeting}>
              <Text
                style={{
                  paddingBottom: 550,
                  marginRight: 170,
                  fontSize: 17,
                  marginTop: 15,
                  color: "white",
                }}
              >
                Hey there, {"\n"} yashwant Dewangan👋
              </Text>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <Ionicons name="notifications-sharp" size={25} color="white" />
            <AntDesign
              name="setting"
              size={25}
              color="white"
              style={styles.iconContainer1}
            />
            <AntDesign
              name="profile"
              size={30}
              color="white"
              style={styles.profileContainer1}
            />
          </View>

          <View style={styles.inputConatiner}>
            <TextInput style={styles.input} placeholder="Search..." />
            <EvilIcons
              name="search"
              size={40}
              color="black"
              style={styles.searchContainer}
            />
            <Entypo
              name="arrow-with-circle-right"
              size={40}
              color="black"
              style={styles.rigthContainer}
            />
          </View>
        </Card>
      </View>

      {/* New image added in the center */}
      <View style={styles.centerImageContainer}>
        <Image
          resizeMode="cover"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/450a4ff984ae1c584cb3a3762fc557ec77d854b81c51e4254f39bb55154af86d?apiKey=6e819305aff14a71a524c5abb40332f8&",
          }}
          style={styles.centerImage}
        />
      </View>

      <Text style={styles.text}></Text>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.divider} />
        <View style={styles.section}></View>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    height: 300,
    padding: 19, // Adjust padding as needed
    backgroundColor: "#8E288E",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  input: {
    marginTop: 100,
    height: 50,
    fontSize: 20,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    backgroundColor: "#cecece",
  },
  avatar: {
    borderRadius: 50,
    width: 71,
    height: 71,
    marginBottom: 550,
    marginLeft: 10,
    marginTop: 40,
  },

  navContainer2: {
    width: "100%",
    height: 300,
  },
  notification: {
    fontSize: 25,
    marginRight: 240,
    fontWeight: "bold",
    marginTop: 50,
  },
  notificationText: {
    fontSize: 20,
    textAlign: "left",
    justifyContent: "flex-start",
  },
  iconContainer: {
    color: "black",
    marginRight: 10,
    marginTop: -640,
    marginLeft: 250,
  },
  iconContainer1: {
    marginLeft: 50,
    marginTop: -30,
  },

  textContainer: {
    marginTop: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 80,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  busContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    height: 80,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    fontSize: 17,
  },
  timeContainer: {
    textAlign: "right",
    fontSize: 17,
    marginBottom: "auto",
  },
  searchContainer: {
    marginLeft: 20,
    marginTop: -42,
  },
  rigthContainer: {
    marginLeft: 300,
    marginTop: -35,
  },
  profileContainer1: {
    marginLeft: 50,
    marginTop: 18,
  },
  inputConatiner: {
    marginTop: -30,
  },
  greeting: {
    textAlign: "start",
    marginLeft: 5,
  },
  color1: {
    backgroundColor: "rgba(220, 82, 200, 1)",
    flex: 1,
    width: "100%",
  },
  color2: {
    backgroundColor: "rgba(67, 9, 10, 2)",
    flex: 1,
    width: "100%",
  },
  color3: {
    backgroundColor: "rgba(57, 13, 92, 1)",
    flex: 1,
    width: "100%",
  },

  // New styles for center image
  centerImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerImage: {
    width: "80%",
    height: "80%",
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 10,
  },
});

export default Travellers;
