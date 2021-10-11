import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class AddVolunteerHours extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text>Add Volunteer Hours - the screen that the user will use to add volunteer hours that they have worked.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F8F1AE"
    }
})