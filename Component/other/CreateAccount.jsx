import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CreateAccount({ navigation }) {

    // React.useEffect(()=>{
    //   fetch('http://localhost:8080/root/st/1',{
    //   method:'GET',
    //   headers:{
    //     'Accept':'application/json',
    //     'Content-Type':'application/json',
    //   }
    // }).then((result)=>{
    //   result.json().then((response)=>{
    //     console.log(response);
    //   })
    // })
    // },[])
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#63ABF9', '#63ABF900']}
                style={styles.background}
            />
            <Text style={styles.label}> Create account </Text>
            <Image
                source={require('../img/Star1.png')}
                style={styles.image}
            />
            <Text style={styles.label1}>Name</Text>
            <TextInput
                style={styles.inputitetext}
                placeholder="Enter your full name"
                placeholderTextColor="#00000080"
            />

            <Text style={styles.label2}> Username </Text>
            <TextInput
                style={styles.inputitetext1}
                placeholder="create  your username"
            />

            <Text style={styles.label3}> Email </Text>
            <TextInput
                style={styles.inputitetext2}
                placeholder="example@gmail.com"
                secureTextEntry={true}
            />

            <Text style={styles.label4}> Create a password</Text>
            <TextInput
                style={styles.inputitetext3}
                placeholder="must be 8 characters"
                secureTextEntry={true}
            />

            <Text style={styles.policycheck}> I accept the terms and privacy policy </Text>

            <TouchableOpacity style={styles.loginbtn} onPress={() => navigation.navigate('OtpVerification')}>
                <Text style={{ color: 'white' }}> Next </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createacclink} onPress={() => navigation.navigate('Login')}>
                <Text>Already have an account? Log in</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,

    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: hp('100%'),
    },
    label: {
        color: 'black',
        fontSize: wp('7%'),
        fontWeight: '700',
        marginBottom: hp('2%'),
        marginRight: wp('5%'),
        marginLeft: wp('5%'),
        marginTop: hp('10%'),
    },
    image: {
        marginTop: hp('-10%'),
        marginLeft: hp('38%'),
        // marginRight: hp('6%'), 
        width: wp('12%'),
        height: hp('6%'),
        resizeMode: 'cover',
    },
    label1: {
        marginBottom: hp('1%'),
        width: wp('23%'),
        fontSize: wp('4%'),
        marginLeft: wp('10%'),
        marginTop: hp('5%'),
    },
    label2: {
        marginTop: hp('2%'),
        width: wp('40%'),
        fontSize: wp('4%'),
        marginLeft: wp('10%'),
    },
    label3: {
        marginTop: hp('2%'),
        width: wp('40%'),
        fontSize: wp('4%'),
        marginLeft: wp('10%'),
    },
    label4: {
        marginTop: hp('2%'),
        width: wp('40%'),
        fontSize: wp('4%'),
        marginLeft: wp('10%'),
    },
    inputitetext: {
        width: wp('80%'),
        marginTop: hp('0%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        backgroundColor: 'white',
        paddingLeft: wp('5%'),
        // paddingRight: wp('5%'),
        paddingBottom: hp('1.7%'),
        paddingTop: hp('1.7%'),
        color: '#000',
        borderRadius: wp('4%'),
        fontSize: wp('4.5%'),
        marginRight: wp('5%'),
    },
    inputitetext1: {
        width: wp('80%'),
        marginTop: hp('1%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        backgroundColor: 'white',
        paddingLeft: wp('5%'),
        // paddingRight: wp('5%'),
        paddingBottom: hp('1.7%'),
        paddingTop: hp('1.7%'),
        color: '#000',
        borderRadius: wp('4%'),
        fontSize: wp('4.5%'),
        marginRight: wp('5%'),
    },
    inputitetext2: {
        width: wp('80%'),
        marginTop: hp('1%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        backgroundColor: 'white',
        paddingLeft: wp('5%'),
        // paddingRight: wp('5%'),
        paddingBottom: hp('1.7%'),
        paddingTop: hp('1.7%'),
        color: '#000',
        borderRadius: wp('4%'),
        fontSize: wp('4.5%'),
        marginRight: wp('5%'),
    },
    inputitetext3: {
        width: wp('80%'),
        marginTop: hp('1%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        backgroundColor: 'white',
        paddingLeft: wp('5%'),
        // paddingRight: wp('5%'),
        paddingBottom: hp('1.7%'),
        paddingTop: hp('1.7%'),
        color: '#000',
        borderRadius: wp('4%'),
        fontSize: wp('4.5%'),
        marginRight: wp('5%'),
    },
    policycheck: {
        marginTop: hp('6%'),
        width: wp('100%'),
        fontSize: wp('4%'),
        marginLeft: wp('16%'),
        marginRight: wp('16%'),
    },
    loginbtn: {
        width: wp('50%'),
        paddingLeft: wp('4%'),
        paddingRight: wp('4%'),
        paddingBottom: hp('2.5%'),
        paddingTop: hp('2.5%'),
        color: 'white',
        backgroundColor: '#8817EE',
        marginTop: hp('8%'),
        marginLeft: wp('24%'),
        marginRight: wp('24%'),
        borderRadius: wp('4%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    createacclink: {
        marginTop: hp('6%'),
        width: wp('100%'),
        fontSize: wp('4%'),
        marginLeft: wp('21%'),
        marginRight: wp('21%'),
    },
});