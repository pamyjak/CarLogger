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
        flex: 1,
        // flexDirection: "row", // horizontal: "column", "row"
        // justifyContent: "space-evenly", // main
        // alignItems: "center", // secondary
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    buttonAlign: {
        backgroundColor: 'red',
        flexDirection: "row", // horizontal: "column", "row"
        justifyContent: "space-evenly", // main
        alignItems: "center", // secondary
    },
    buttonText: {
        backgroundColor: 'orange',
        height: 55,
        width: Dimensions.get("screen").width / 3,

        color: "black",
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 18,
        fontWeight: "bold",
    },


    top: {
        backgroundColor: "dodgerblue",
        flex: 1,
    },
    bottom: {
        backgroundColor: "white",
        flex: 2,
    },
});