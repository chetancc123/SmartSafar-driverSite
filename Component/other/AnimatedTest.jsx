
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Button, Image, ImageBackground } from "react-native";
import { Easing } from "react-native-reanimated";

const AnimatedTest = () => {
    // Declare state variables for the text animation
    const [textSize, setTextSize] = useState(new Animated.Value(20));
    const [textPosition, setTextPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

    // Declare state variables for the paragraph, button, and background image opacity
    const [paragraphOpacity, setParagraphOpacity] = useState(new Animated.Value(0.5));
    const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(0.5));
    const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(new Animated.Value(0));

    // Declare state variable for the background image position
    const [backgroundImagePosition, setBackgroundImagePosition] = useState(new Animated.Value(0));

    // Declare a function to animate the text, paragraph, button, and background image
    const animateAll = () => {
        // Use parallel to run multiple animations at the same time
        Animated.parallel([
            // Use timing to change the text size over 2 seconds
            Animated.timing(textSize, {
                toValue: 2,
                duration: 2000,
                useNativeDriver: false, // Set to false for fontSize
            }),
            // Use spring to move the text position over 2 seconds
            Animated.spring(textPosition, {
                toValue: { x: -50, y: 50 },
                useNativeDriver: true,
            }),
            // Use timing to change the paragraph and button opacity over 2 seconds
            Animated.timing(paragraphOpacity, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            // Use timing to change the background image opacity over 0.5 second
            Animated.timing(backgroundImageOpacity, {
                toValue: 0.5,
                duration: 500,
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true,
            }),
        ]).start(); // Start the animation
    };

    // Declare a function to animate the background image position
    const animateBackgroundImage = () => {
        // Use timing to move the background image down over 1 second
        Animated.timing(backgroundImagePosition, {
            toValue: 100,
            duration: 8000,
            useNativeDriver: false,
        }).start(); // Start the animation
    };

    // Use useEffect to run the animations once when the component mounts
    useEffect(() => {
        animateAll();
        animateBackgroundImage();
    }, []);

    // Create an interpolation for the background image position
    const interpolatedValue = backgroundImagePosition.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100], // Adjust the output range to produce numeric values
    });


    return (
        <View style={styles.container}>
            {/* Use ImageBackground to render the background image with opacity and position animation */}
            <ImageBackground
                source={require("../assets/Welcome1.png")}
                // style={{ width: 1200, height: 600 }}
                style={[styles.backgroundImage, { opacity: backgroundImageOpacity, transform: [{ translateY: interpolatedValue }] }]}
            >
                <Animated.Text
                    style={[styles.text, { transform: textPosition.getTranslateTransform() }]}
                >
                    Hello, world!
                </Animated.Text>
                <Animated.Text style={[styles.paragraph, { opacity: paragraphOpacity }]}>
                    This is a paragraph that is slightly visible. It has some lorem ipsum text to fill the space. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Animated.Text>
                <Animated.View style={{ opacity: buttonOpacity }}>
                    <Button style={styles.button} title="Press me" onPress={() => alert("You pressed the button")} />
                </Animated.View>
            </ImageBackground>
        </View>
    );
};

// Define some styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    text: {
        fontWeight: "bold",
        color: "blue",
    },
    paragraph: {
        margin: 10,
    },
    button: {
        margin: 10,
    },
});

export default AnimatedTest;
