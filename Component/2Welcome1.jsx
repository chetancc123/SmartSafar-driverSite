import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome1({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/Welcome1.png")}
        style={{ flex: 1, height: hp("100%"), width: wp("100%") }}
      >
        <View
          style={{
            position: "absolute",
            flex: 1,
            marginTop: hp("60%"),
            padding: wp("5%"),
          }}
        >
          <Text style={{ color: "white", fontSize: 48 }}>Welcome To</Text>
          <Text style={{ color: "white", fontSize: 55 }}>Smart Safar</Text>
          <Text style={{ color: "white", fontSize: 16 }}>
            We make your daily travel easy with Smart Safar where you can track your
            daily ride, on your finger tips.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            position: "absolute",
            alignSelf: "center",
            top: hp("90%"),
          }}
          onPress={() => navigation.navigate("Welcome2")}
        >
          <View
            style={{
              width: wp("90%"),
              alignItems: "center",
              borderRadius: 10,
              height: hp("6%"),
              justifyContent: "center",
              backgroundColor: '#13C39C'
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>Continue</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}
