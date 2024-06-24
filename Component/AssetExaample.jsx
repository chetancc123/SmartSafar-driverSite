import React, { useState } from "react";
import { Text, View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// import * as DocumentPicker from "expo-document-picker";

export default function AssetExample({ modalVisible, setModalVisible }) {
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <Text style={styles.headerText}>ADD FILES</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeIcon}
              >
                <Ionicons name="close-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.uploadContainer}>
              <AntDesign name="cloudupload" size={50} color="blue" />
              <Text style={styles.uploadText}>Click to Upload</Text>
              <TouchableOpacity onPress={handleChooseFile}>
                <Text style={styles.chooseText}>Choose file to upload</Text>
              </TouchableOpacity>
              <Text style={styles.selectText}>
                Select image, pdf, or .png files
              </Text>
            </View>
            <View style={styles.helpContainer}>
              <AntDesign name="questioncircleo" size={20} color="black" />
              <Text style={styles.helpText}>Still need help?</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleUpload}
                style={styles.uploadButton}
              >
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  openButton: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "#B287A3",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeIcon: {
    marginLeft: "auto",
  },
  uploadContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  uploadText: {
    marginTop: 10,
  },
  chooseText: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  selectText: {
    marginTop: 10,
    color: "lightgray",
  },
  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  helpText: {
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
});
