import React, { useState } from "react";
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AntDesign } from '@expo/vector-icons';

export default function PrivacyPolicy({ navigation }) {
  const [expanded, setExpanded] = useState(false);


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient
          colors={["#A7F57A", "#BDE6D9"]}
          style={styles.background}
        >
          <View style={styles.headline}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.goBack()} />
            </TouchableOpacity>
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <View style={styles.headline1}>
            <Text style={styles.text1}>Smart Safar Privacy Policy</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.paragraph}>
              Smart Safar is dedicated to upholding your privacy and ensuring the protection of your personal information. We gather various forms of data, including personal details, location information, and usage data, with the aim of enhancing our transportation services. This information serves multiple purposes, including improving service quality, facilitating payment processing, maintaining effective communication channels, conducting analysis, and adhering to legal obligations.
            </Text>
            <Text style={styles.paragraph}>
              In our commitment to transparency, we may share your data under specific circumstances. This includes collaborations with trusted service providers to deliver seamless experiences, compliance with legal mandates, facilitating business transfers, or upon obtaining your explicit consent. Despite implementing robust security measures, it's essential to recognize that complete security on the internet is elusive.
            </Text>
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
              <Text style={[styles.paragraph, styles.readMore]}>{expanded ? "Read Less" : "Read More"}</Text>
            </TouchableOpacity>
            {expanded && (
              <Text style={styles.paragraph}>
                Your privacy choices matter to us. You retain the right to access, rectify, or erase your data, and you can opt-out of promotional communications. Our services are designed for individuals aged 13 and above, and we do not knowingly collect information from children. We periodically update our privacy policy to reflect changes in practices or regulations. For any queries or concerns regarding our privacy practices, please reach out to us at [contact email/phone number].
              </Text>
            )}
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    height: hp('110%')
  },
  headline: {
    marginTop: hp("6%"),
    paddingHorizontal: wp("5%"),
    paddingVertical: hp("1%"),
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: wp("5%")
  },
  headline1: {
    marginTop: hp("2%"),
    
  },
  text1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine:"underline"
  },
  contentContainer: {
    paddingHorizontal: wp("5%"),
    marginTop: hp("4%"),
  },
  paragraph: {
    marginBottom: hp("2%"),
    fontSize: 14,
    lineHeight: 24,
  },
  readMore: {
    textDecorationLine: "underline",
    color: "blue",
  }
});
