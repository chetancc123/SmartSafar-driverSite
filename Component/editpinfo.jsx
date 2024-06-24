import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default function PinfoEdit() {
    const [email, setEmail] = useState("");
    const [emailOtp, setEmailOTP] = useState("");
    const [noOtp, setNoOTP] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [formData, setFormData] = useState(new FormData());
    const [data, setData] = useState({
        name: "",
        adharNo: "",
        dlNumber: "",
        panNo: "",
        phoneNo: "",
        email: "",
        address: "",
        profileImgLink: "",
    });

    useEffect(() => {
        fetchDriverProfile();
    }, []);

    const fetchDriverProfile = async () => {
        try {
            const response = await fetch(
                `http://192.168.1.59:8080/driver/get-driver-profile/1`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch profile");
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const EmailSendOtp = async () => {
        console.log('otp')
        const response = await fetch(`http://192.168.1.59:8080/driver/update-emailSendOtp/302`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        });
        if (response.ok) {
            Alert.alert("OTP sent");
            setIsEmailOTPSent(true);
        } else {
            Alert.alert("Error");
        }
    }

    const EmailVerifyOtp = async () => {
        console.log('otp')
        const response = await fetch(`http://192.168.1.59:8080/driver/update-verify-email/302`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ updateOtp: emailOtp, newEmail: email })
        });
        console.log(await response.text());
        console.log(emailOtp);
        if (response.ok) {
            Alert.alert("Email OTP verified successfully");
            setIsEmailOTPSent(true);
            // setIsEmailOTPSent(false);
        } else {
            Alert.alert("Invalid Email OTP");
        }
    };

    const PhoneSendOtp = async () => {
        const response = await fetch(`http://192.168.1.59:8080/driver/update-phoneNumberSendOtp/302`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNo: phoneNo })
        });
        console.log(await response.text());

        if (response.ok) {
            Alert.alert("OTP sent");
            // setIsSMSOTPVerified(true);
        } else {
            Alert.alert("Error");
        }
    };

    const PhoneVerifyOtp = async () => {
        const response = await fetch(`http://192.168.1.59:8080/driver/update-verify-phoneno/302`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ updateOtp: noOtp, newPhoneNo: phoneNo })
        });
        if (response.ok) {
            Alert.alert("SMS OTP verified successfully");
            // setIsSMSOTPVerified(true);
            // setIsSMSOTPSent(false);
        } else {
            Alert.alert("Invalid SMS OTP");
        }
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#DC52FF", "#430970", "#390D5C"]}
                style={styles.background}
            />

            <View style={styles.headBox}>
                <LinearGradient colors={["#8E288E", "#402775"]} style={styles.topBox}>
                    <View style={{ marginTop: hp("2%"), marginLeft: wp("8%") }}>
                        <Ionicons
                            name="arrow-back-circle"
                            size={wp("7%")}
                            color="#ffffff"
                        />
                    </View>

                    <View>
                        <Text
                            style={{
                                marginLeft: wp("36%"),
                                color: "#ffffff",
                                fontSize: wp("4%"),
                            }}
                        >
                            {data.name}
                        </Text>
                        <Text
                            style={{
                                marginLeft: wp("31%"),
                                color: "#ffffff",
                                fontSize: wp("2.5%"),
                            }}
                        >
                            {data.email}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginLeft: wp("74%"),
                            flexDirection: "row",
                            marginTop: hp("-5%"),
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <TouchableOpacity>
                            <Fontisto name="bell-alt" size={wp("5%")} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="setting" size={wp("5%")} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button title="Pick an image from camera roll" />
            </View>

            <View
                style={{
                    alignItems: "center",
                    marginTop: hp("-13%"),
                    marginBottom: hp("4%"),
                }}
            >

                <View
                    style={{
                        width: wp("30%"),
                        height: wp("30%"),
                        backgroundColor: "blue",
                        borderRadius: wp("50%"),
                    }}
                >
                    <Image

                        style={{ width: wp("30%"), height: wp("30%"), borderRadius: 65 }}
                        source={{ uri: data.profileImgLink }}
                    />
                </View>
            </View>

            <ScrollView style={styles.sContainer}>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: "row", marginTop: hp("3%"), }}>
                        <TextInput
                            style={styles.input2}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TouchableOpacity style={styles.button} onPress={EmailSendOtp} >
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "row", marginBottom: hp("2%"), justifyContent: "center" }} >
                        <TextInput
                            style={styles.inputitetext2}
                            placeholder="Enter OTP"
                            placeholderTextColor="#00000080"
                            value={emailOtp}
                            onChangeText={(text) => setEmailOTP(text)}

                        />
                        <TouchableOpacity style={styles.otpButton2} onPress={EmailVerifyOtp}>
                            <Text style={{ color: '#FFF' }}>Verify OTP</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.horizontalLine2} />


                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            style={styles.input2}
                            placeholder="Phone Number"
                            value={phoneNo}
                            onChangeText={(text) => setPhoneNo(text)}
                        />
                        <TouchableOpacity style={styles.button} onPress={PhoneSendOtp}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                    {/* +916266180866 */}
                    {/*  */}
                    <View style={{ flexDirection: "row", marginBottom: hp("2%"), justifyContent: "center" }} >
                        <TextInput
                            style={styles.inputitetext2}
                            placeholder="Enter OTP"
                            placeholderTextColor="#00000080"
                            value={noOtp}
                            onChangeText={(text) => setNoOTP(text)}

                        />
                        <TouchableOpacity style={styles.otpButton2} onPress={PhoneVerifyOtp} >
                            <Text style={{ color: '#FFF' }}>Verify OTP</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sContainer: {
        height: hp("100%"),
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: hp("100%"),
    },
    pinfo: {
        justifyContent: 'center',
        textAlign: "center",
        alignItems: "center",

        marginVertical: hp("2%"),

    },
    ptext: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gold",
    },
    topBox: {
        borderRadius: wp("4%"),
        height: hp("20%"),
        width: wp("90%"),
        marginTop: hp("5%"),
    },
    headBox: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        margin: wp("1%"),
        height: hp("30%"),
        borderRadius: wp("4%"),
    },
    textContainer: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        width: wp("90%"),
        backgroundColor: "white",
        padding: wp("3%"),
        borderRadius: wp("4%"),
        marginLeft: wp("4%"),
    },
    horizontalLine2: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginVertical: hp("1%"),
        marginBottom: hp("3%"),
        width: wp("80%"),
        alignSelf: "center",
    },

    bank1: {
        fontWeight: "bold",
        fontSize: wp("3%"),
        margin: wp("2%"),
        width: wp("30%"),
    },
    bankContainer: {
        marginLeft: wp("8%"),
        width: wp("70%"),
        marginTop: wp("2%"),
    },
    input: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white",
        borderRadius: 10,
        width: wp("80%"),
        height: hp("6%"),
        marginBottom: hp("1%"),
        paddingLeft: hp("3%"),
        color: "black",
    },
    input2: {
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white",
        borderRadius: 10,
        width: wp("58%"),
        height: hp("6%"),
        marginBottom: hp("1%"),
        paddingLeft: hp("3%"),
        color: "black",
    },


    button: {
        backgroundColor: "blue",
        borderRadius: 10,
        width: wp("20%"),
        height: hp("5%"),
        justifyContent: "center",
        marginLeft: wp("4%"),
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    otpButton2: {
        backgroundColor: "grey",
        paddingVertical: 4,
        paddingHorizontal: 2,
        borderRadius: 10,
        width: wp("22%"),
        height: hp("5"),
        alignItems: "center",
        justifyContent: "center",
    },
    inputitetext2: {
        width: wp('40%'),
        height: hp('5%'),
        marginTop: hp('0.5%'),
        backgroundColor: 'white',
        paddingLeft: wp('5%'),


        borderRadius: wp('1%'),
        fontSize: wp('3.5%'),
        marginRight: wp('6%'),
        borderColor: "grey",
        borderWidth: 1,


    },
});
