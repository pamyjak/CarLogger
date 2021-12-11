import React from 'react';
import {
    Dimensions,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';

export const Styles = StyleSheet.create({
    appBackground: {
        backgroundColor: 'dodgerblue',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // paddingTop: 0, 

        flex: 1,
        // flexDirection: "row", // horizontal: "column", "row"
        // justifyContent: "space-evenly", // main
        // alignItems: "center", // secondary
    },
    
    // The outer container to hold the navigation buttons
    navButtonAlign: { 
        backgroundColor: 'dodgerblue', // Not to be seen!
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    // Navigation Button style for Selected and Non-Selected states
    navButtonSelect: {
        // Backing
        backgroundColor: "royalblue",
        height: 45,
        width: (true) ? Dimensions.get("screen").width / 3: 120,

        // Text
        color: "dodgerblue",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",

        // Boarder
        borderStyle: "solid",
        borderWidth: 2.5,
        borderRadius: 45 / 2, // Magic number is from the height! (half of the current height)
        borderColor: "gainsboro",
        backgroundColor: "white"
    },
    navButtonNonSelect: {
        // Backing
        backgroundColor: "dodgerblue",
        height: 55,
        width: (true) ? Dimensions.get("screen").width / 3 : 120,

        // Text
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },


    // REMOVE: Just playing around with border styles
    info: {
        // backgroundColor: 'green',
        borderStyle: "solid",
        borderWidth: 2.5,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "gainsboro"
    },

    // Divides the two main screen sections. Relative ration can be set here.
    top: {
        backgroundColor: "white",
        flex: 1, // Top to Bottom Ratio
    },
    bottom: {
        backgroundColor: "white",
        flex: 2, // Top to Bottom Ratio
    },
});