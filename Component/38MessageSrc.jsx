
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  handleBack,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageSrc = () => {
  const handleMessageSend = () => {
    // Handle sending the message
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <LinearGradient
        colors={["#DC52FF", "#DC52FF", "#430970", "#390D5C"]}
        style={styles.background}
      >
        {/* Top Right Background Image */}
        <ImageBackground
          source={require("../assets/tright.png")}
          style={styles.topRightImage}
        />

        {/* Bottom Left Background Image */}
        <ImageBackground
          source={require("../assets/bleft.png")}
          style={styles.bottomLeftImage}
        />

        {/* Top Section */}
        <View style={{ flex: 1, padding: wp("5%"), marginVertical: wp("10%") }}>
          <View style={styles.topSection}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="chevron-back" size={24} color="black" />
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.enterText}>Chat</Text>
          </View>
        </View>

        {/* Middle Section (Message Input) */}
        <View style={styles.middleSection}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            placeholderTextColor="gray"
            multiline={true}
            
          />
          <TouchableOpacity onPress={handleMessageSend} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>

    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    height: hp("110%"),
    flex: 1,
  },
  topSection: {
    alignItems: "left",
  },
  topRightImage: {
    position: "absolute",
    top: 0,
    right: 0,
    width: wp("90%"),
    height: hp("39%"),
  },
  bottomLeftImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: wp("80%"),
    height: hp("44%"),
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("-3%"),
  },
  backText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  enterText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
  },
  middleSection: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp("5%"),
    marginBottom:hp("10%"),
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1%"),
    marginRight: wp("2%"),
    position:"relative",
     
  },
  sendButton: {
    backgroundColor: "#DC52FF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1%"),
  },
});

export default MessageSrc;