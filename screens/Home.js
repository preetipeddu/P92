import React, {Component} from "react";
import {Text, View, StyleSheet} from "react-native";

export default class Home extends Component {
    render(){
        return (
            <View style = {styles.container}>
                <Text>Home - the screen that will display the user's information once logged in through Google authentification.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5E1FD"
    }
})