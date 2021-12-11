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
    buttonAlign: {
        backgroundColor: 'red', // Not to be seen!
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonText: {
        backgroundColor: "dodgerblue",
        height: 55,
        width: (true) ? Dimensions.get("screen").width / 3 : 120,

        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },

    info: {
        // backgroundColor: 'green',
        borderStyle: "solid",
        borderWidth: 2.5,
        borderRadius: 10,
        borderColor: "black",
        backgroundColor: "gainsboro"
    },

    top: {
        backgroundColor: "white",
        flex: 1, // Top to Bottom Ratio
    },
    bottom: {
        backgroundColor: "white",
        flex: 2, // Top to Bottom Ratio
    },
});