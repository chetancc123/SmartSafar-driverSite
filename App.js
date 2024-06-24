import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//////Main IMPORT FILES
import SplashScreen from "./Component/1SplashScreen";
import Welcome1 from "./Component/2Welcome1";
import Welcome2 from "./Component/3Welcome2";
import Welcome3 from "./Component/4Welcome3";

import LoginPage from "./Component/6LoginPage";
import Credential from "./Component/7credential";
import forgetPassword from "./Component/ForgotPassword";
import passwordChange from "./Component/PasswordChange";
import ResetVerify from "./Component/ResetVerify";
import HomePage from "./Component/13HomePage";
import Profile from "./Component/26Profile";
import Setting from "./Component/25Setting";
import AddbankAccount from "./Component/27AddbankAccount";
import SetPassword from "./Component/28SetPassword";
import PrivacyPolicy from "./Component/31PrivacyPolicy";
import TripHistory from "./Component/29TripHistory";
import DriverAccept from "./Component/15DriverAccept";
import ContactUs from "./Component/33ContactUs";
import DriverOTP from "./Component/19otp1";
import DriverAccept111 from "./Component/18Arrivedlocation";
import Ridecomplete from "./Component/21Ridecomplete";
import ChangeCar from "./Component/40Changecae";


import DocUpload from "./Component/35DocUpload";
import Verificationpending from "./Component/11verificationpending";
import Successfullypasswordchange from "./Component/9Sucessfullypasswordchange";
import Driverinfo from "./Component/10Driverinfo";

import TopSection from "./Component/TopSection";
import Map from "./Component/Map";



import TravelNotification from "./Component/30TravelNotification";
///Doent exist pages
import ChargingPoint from "./Component/39ChargingPoint";
import ComplaintRises from "./Component/34ComplaintRises";
import Otp from "./Component/36Uploaddoc";
import DocUpload1 from "./Component/8Enterotp";
import Modal from "./Component/5Modal";

import Otp111 from "./Component/8Enterotp";
import { Driver_Wallet } from "./Component/Driver_Wallet";
import Ridecmplescanner from "./Component/22Ridecmplescanner";
import MessageSrc from "./Component/38MessageSrc";
import uploaddoc from "./Component/36Uploaddoc";
import Document from "./Component/37Ddddocument";
import Bannerandamount from "./Component/24BannerandAmount";
import pinfo from "./Component/editpinfo";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splashscreeen"
        screenOptions={{ headerShown: false }}
      >
        {/* Final Product */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Welcome1" component={Welcome1} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen name="Welcome3" component={Welcome3} />

        <Stack.Screen name="Credential" component={Credential} />
        <Stack.Screen name="driverinfo" component={Driverinfo} />
        <Stack.Screen name="forgetpassword" component={forgetPassword} />
        <Stack.Screen name="resetVerify" component={ResetVerify} />
        <Stack.Screen name="passwordChange" component={passwordChange} />
        <Stack.Screen name="documentupload" component={DocUpload} />
        <Stack.Screen name="sucesspass" component={Successfullypasswordchange} />
        <Stack.Screen name="Verification" component={Verificationpending} />


        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />

        <Stack.Screen name="Settings" component={Setting} />
        <Stack.Screen name="TripHistory" component={TripHistory} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddbankAccount" component={AddbankAccount} />
        <Stack.Screen name="Changecar" component={ChangeCar} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Policy" component={PrivacyPolicy} />

        <Stack.Screen name="DriverAccept" component={DriverAccept} />
        <Stack.Screen name="Arrivedlocation" component={DriverAccept111} />
        <Stack.Screen name="DriverOTP" component={DriverOTP} />
        <Stack.Screen name="Ridecomplete" component={Ridecomplete} />



        {/* end here */}
        {/*<Stack.Screen name="Map" component={Map} />  */}
        {/* <Stack.Screen name="TopSection" component={TopSection} /> */}
        
        {/* <Stack.Screen name="FinalAccept" component={Finalaccept} />
        {/* <Stack.Screen name="otppage" component={Otp111} /> */}
        {/* <Stack.Screen name="Uploaddoc" component={Uploaddoc} /> */}
        {/* <Stack.Screen name="documentuploaded" component={Document} /> */}

        
        {/* settings */}

        {/* <Stack.Screen name="Notification" component={TravelNotification} /> */}
        {/* <Stack.Screen name="Pinfo" component={pinfo} />
        {/* <Stack.Screen name="Complaintrises" component={ComplaintRises} /> */}
        {/* <Stack.Screen name="Driverwallet" component={Driver_Wallet} /> */}
        {/* <Stack.Screen name="messagesrc" component={MessageSrc} /> */}
        {/* <Stack.Screen name="Cancel" component={Cancel} /> */}
        {/* <Stack.Screen name="DocUpload" component={DocUpload} /> */}
        {/* <Stack.Screen name="HomePage" component={AssetExample} /> */}
        {/* <Stack.Screen name="profile" component={Profile} /> */}
        {/* <Stack.Screen name="ChargingPoint" component={ChargingPoint}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
