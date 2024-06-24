import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FontAwesome5, Feather, Foundation, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BottomBar = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient
                colors={["#ADD8E6", "#87CEEB", "#87CEFA"]}
                style={styles.container}
            >
              
                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.item}>
                        <FontAwesome5 name="home" size={24} color="black" />
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <FontAwesome5 name="car" size={24} color="black" />
                        <Text style={styles.text}>CAR LIST</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <MaterialCommunityIcons name="android-messages" size={24} color="black" />
                        <Text style={styles.text}>Booking</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Fontisto name="bell-alt" size={24} color="black" />
                        <Text style={styles.text}>Notification</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <FontAwesome5 name="user-alt" size={24} color="black" />
                        <Text style={styles.text}>User</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        height: hp("100%"),
        flexDirection: "column",
    },
    item: {
        alignItems: "center",
    },
    text: {
        marginTop: hp('0.8%'),
        fontWeight: "bold",
        // paddingBottom: 10
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: hp("10%"),
        width: wp("100%"),
        borderTopWidth: 1,
        borderTopColor: "black",
        paddingHorizontal: wp("5%"),
        backgroundColor: "white",
        bottom: hp('-94%')
    },

});

export default BottomBar;
