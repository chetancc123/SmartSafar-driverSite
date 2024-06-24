// React Native code for creating a text with animation and a paragraph with a button and a background image

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Animated, Button, ImageBackground } from "react-native";

const App = () => {
  // Declare state variables for the text animation
  const [textSize, setTextSize] = useState(new Animated.Value(20));
  const [textPosition, setTextPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  // Declare state variables for the paragraph, button, and background image opacity
  const [paragraphOpacity, setParagraphOpacity] = useState(new Animated.Value(0.5));
  const [buttonOpacity, setButtonOpacity] = useState(new Animated.Value(0.5));
  const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(new Animated.Value(0));

  // Declare a function to animate the text, paragraph, button, and background image
  const animateAll = () => {
    // Use parallel to run multiple animations at the same time
    Animated.parallel([
      // Use timing to change the text size over 2 seconds
      Animated.timing(textSize, {
        toValue: 40,
        duration: 2000,
        useNativeDriver: false,
      }),
      // Use spring to move the text position over 2 seconds
      Animated.spring(textPosition, {
        toValue: { x: -50, y: 50 },
        useNativeDriver: false,
      }),
      // Use timing to change the paragraph and button opacity over 2 seconds
      Animated.timing(paragraphOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      // Use timing to change the background image opacity over 1 second
      Animated.timing(backgroundImageOpacity, {
        toValue: 0.5,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(); // Start the animation
  };

  // Use useEffect to run the animation once when the component mounts
  useEffect(() => {
    animateAll();
  }, []);

  return (
    <View style={styles.container}>
      {/* Use Animated.Image to render the background image with opacity animation */}
      <Animated.ImageBackground
        style={[styles.backgroundImage, { opacity: backgroundImageOpacity }]}
        source={require("../assets/maps.webp")}
      />
      {/* Use Animated.Text to render the animated text */}
      <Animated.Text style={[styles.text, { fontSize: textSize, transform: textPosition.getTranslateTransform() }]}>
        Hello, world!
      </Animated.Text>
      {/* Use Animated.Text to render the paragraph with opacity animation */}
      <Animated.Text style={[styles.paragraph, { opacity: paragraphOpacity }]}>
        This is a paragraph that is slightly visible. It has some lorem ipsum text to fill the space. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Animated.Text>
      {/* Use Animated.View to wrap the button with opacity animation */}
      <Animated.View style={{ opacity: buttonOpacity }}>
        <Button style={styles.button} title="Press me" onPress={() => alert("You pressed the button")} />
      </Animated.View>
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
  // backgroundImage: {
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  // },
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

export default App;
