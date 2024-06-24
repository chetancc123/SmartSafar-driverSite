import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ComplaintRises({ navigation })  {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#8E288E", "#430970"]} style={styles.container}>
        <View style={styles.topSection}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="black" />
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.riseComplaintText}>Rise Complaint</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerText}>Write query</Text>
        </View>

        {/* Address */}
        <View style={styles.address}>
          <Text style={{ color: "white", textAlign: "center" }}>
            House# 72, Road# 21, ABC Mall, Raipur-1213 {"\n"} Call: 987654231
            (24*7) {"\n"} Email: support@rido.com
          </Text>
        </View>

        {/* Input Group - Name */}
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text>Name</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* Input Group - Email */}
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <Text>Email</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* Phone Input Group */}
        <View style={styles.inputGroup}>
          <View style={styles.phoneInput}>
          <Ionicons name="chevron-down" size={24} color="black"/>
            <View style={styles.separator} />
            <Text style={styles.phoneCode}>+91</Text>
            <TextInput
              style={[
                styles.phoneLabel,
                { flex: 1, color: "#B8B8B8", marginLeft: 8 },
              ]}
              placeholder="Your mobile number"
              placeholderTextColor="#B8B8B8"
            />
          </View>
        </View>

        {/* Text Area */}
        <View style={styles.inputGroup}>
          <View style={styles.textAreaWrapper}>
            <TextInput  style={styles.textArea} multiline   placeholder="write a text"/>
          </View>
        </View>

        {/* Send Message Button */}
        <LinearGradient colors={['#DC52FF', '#390D5C']} style={styles.button}>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </LinearGradient>
        
        {/* Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image source={require("../assets/spam.png")} style={styles.modalImage} />
              <Text style={styles.modalText}>We're solving your query!</Text>
              <Text style={styles.modalSubText}>Continue to improve our service and satisfy you on the next trip.</Text>
             
              <Button title="Home" onPress={() => navigation.navigate("HomePage")} />
            </View>
          </View>
        </Modal>

        {/* Divider */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: wp("100%"),
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("100%"),
    paddingHorizontal: 10,
    marginTop: 15,
  },
  backButton: {
    flex: 1,
    flexDirection: "row",
    marginTop: 7,
  },
  backText: {
    marginLeft: 5,
    fontSize: 16,
  },
  riseComplaintText: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginRight: wp("28%"),
    marginTop: 6,
  },

  header: {
    marginTop: 50,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  address: {
    fontSize: 14,
    lineHeight: 18,
    color: "white",
    width: wp("70%"),
    marginTop: 20,
  },

  inputGroup: {
    width: wp("70%"),
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 10,
  },
  inputWrapper: {
    paddingVertical: 5,
    paddingHorizontal: 3.5,
    borderRadius: 6,
    borderWidth: 0.689,
    borderColor: "#B8B8B8",
  },
  phoneInput: {
    flexDirection: "row",
    gap: 1.5,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5.5,
    borderRadius: 6,
    borderWidth: 0.689,
    borderColor: "#B8B8B8",
  },
  icon: {
    width: 4,
    aspectRatio: 0.88,
  },
  separator: {
    width: 1,
    backgroundColor: "white",
    height: 34,
  },
  phoneCode: {
    lineHeight: 18,
    color: "#888",
  },
  phoneLabel: {
    flex: 1,
    lineHeight: 16,
    color: "#B8B8B8",
  },
  textAreaWrapper: {
    paddingVertical: 41,
    paddingBottom: 16,
    borderRadius: 1,
    borderWidth: 0.689,
    borderColor: "#B8B8B8",
  },
  textArea: {
    fontSize: 15,
    height: 18,
    color: "#B8B8B8",
    textAlign:"left"
  },
  button: {
    width: wp("80%"),
    paddingHorizontal: 16,
    paddingVertical: 3.5,
    marginTop: 100,
    // lineHeight: 25,
    textAlign: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 39,
    textAlign: "center",
    color: "white",
  },
  divider: {
    marginTop: 20,
    backgroundColor: "#444",
    height: 3,
    borderRadius: 68.861,
    width: 92,
  },
  // Modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    height:hp("40%"),
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalSubText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#888",
  },
  modalImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
});