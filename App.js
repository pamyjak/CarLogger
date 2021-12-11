import { Styles } from './Styles';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  Pressable,
  Text,
  StatusBar,
  View,
} from 'react-native';

// =========== MAIN APP ===============
export default function App() {
  
  // Remove console Log
  console.log("App Execution!");

  const [view, setView] = useState(1);
  StatusBar.setBarStyle('light-content', true);

  return (
    <View style={Styles.appBackground}>

      {/* This is the top Section */}
      <View style={Styles.top}>

      </View>

      {/* This is the bottom Section */}
      <View style={Styles.bottom}>

        {/* navigation Buttons */}
        <View style={Styles.buttonAlign}>

          <Pressable onPress={() => setView(1)} >
            <View >
              <Text style={Styles.buttonText}>
                {navButtonLeft}
              </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => setView(2)} >
            <Text style={Styles.buttonText}>
              {navButtonCenter}
            </Text>
          </Pressable>

          <Pressable onPress={() => setView(3)} >
            <Text style={Styles.buttonText}>
              {navButtonRight}
            </Text>
          </Pressable>

        </View>

        {/* Main window */}
        <View style={Styles.info}>
          {view == 1 && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonLeft} Section
            </Text>
          )}

          {view == 2 && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonCenter} Section
            </Text>
          )}

          {view == 3 && (
            <Text style={{ alignSelf: "center" }}>
              This is {navButtonRight} Section
            </Text>
          )}

        </View>

      </View>

    </View>
  );
}

let navButtonLeft = "Milage";
let navButtonCenter = "Maintenance";
let navButtonRight = "Accidents";

// OnPress Function
const handlePress = () => console.log("Text Pressed!");
const buttonPress = () => console.log("Button Pressed!");

const navButtonPressedLeft = () => Alert.alert(navButtonLeft, "Add new " + navButtonLeft + " Log?", [
  {
    text: "Add",
  },
  {
    text: "Cancel",
    style: "cancel",
  }
]);

const navButtonPressedCenter = () => Alert.alert(navButtonCenter, "Add new " + navButtonCenter + " Log?", [
  {
    text: "New " + navButtonLeft,
  },
  {
    text: "Cancel",
    style: "cancel",
  }
]);

const navButtonPressedRight = () => Alert.alert(navButtonRight, "Add new " + navButtonRight + " Log?", [
    {
      text: "Accidents",
    },
    {
      text: "Cancel",
      style: "cancel",
    }
  ]);

