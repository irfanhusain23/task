import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, ImageBackground, Dimensions, TextInput, Button, Pressable } from 'react-native'


export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            emailErr: "",
            password: "",
            passwordErr: "",
            show: false,
        }
    };

    onValidateEmail() {
        if (this.state.email != this.props.route.params.item.email) {
            this.setState({ emailErr: "This email is not valid" })
        } else {
            this.setState({ emailErr: "" })
        }
    }

    onValidatePassword() {
        if (this.state.password != this.props.route.params.item.password) {
            this.setState({ passwordErr: "This password is not valid" })
        } else {
            this.setState({ passwordErr: "" })
        }
    }
    onSubmit() {
        if (this.state.email != this.props.route.params.item.email) {
            this.setState({ emailErr: "This email is not valid" })
        } else if (this.state.password != this.props.route.params.item.password) {
            this.setState({ passwordErr: "This password is not valid" })
        } else {
            console.warn("You are login now")
        }

    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.bottomView}>
                    <View style={styles.botView} >
                        <Text style={styles.welcoTxt}>Welcome</Text>
                        <Text style={styles.donTxt}>Don't have an account ?
                            <Pressable style={styles.press} onPress={() => this.props.navigation.navigate("Signup")}>
                                <Text style={styles.registerTxt}> Register Now</Text>
                            </Pressable>

                        </Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Emailaddress"
                                keyboardType="email-address"
                                onChangeText={(text) => this.setState({ email: text })}
                                onBlur={() => this.onValidateEmail()}
                            />
                            <Text>{this.state.emailErr}</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                keyboardType="numeric"
                                onChangeText={(text) => this.setState({ password: text })}
                                onBlur={() => this.onValidatePassword()}
                            />
                            <Text>{this.state.passwordErr}</Text>
                        </View>
                        <View>
                            <Button
                                title="Login"
                                color="#4632A1"
                                onPress={() => this.onSubmit()}
                            />

                        </View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "center"
    },


    bottomView: {
        backgroundColor: "#ffffff",
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    botView: {
        padding: 10,
    },
    welcoTxt: {
        color: "#4632A1",
        fontSize: 34,
        marginHorizontal: Dimensions.get('window').width * .25
    },
    donTxt: {
        marginHorizontal: Dimensions.get('window').width * .1,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    registerTxt: {
        color: "red",
        marginVertical: -4,
        fontStyle: "italic",
    }

})
