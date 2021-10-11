import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class VolunteerHistory extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text>Volunteer History - the screen that the user navigates to when checking their volunteer history.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#AECBD6"
    }
})