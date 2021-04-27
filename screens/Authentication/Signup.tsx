import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import { RadioButton } from 'react-native-paper'
import { Snackbar } from 'react-native-paper';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validNameRegex = RegExp(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u);


function Signup() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [checked, setChecked] = useState('mess')
    const [state, setState]: any = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
    });
    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
    })


    const [isError, setIsError] = useState(false)
    const [errorText, setErrorText] = useState("")

    const handleChange = (name: any, value: any) => {
        console.log(checked)
        let errors = error;
        switch (name) {
            case "name":
                errors.name =
                    (value.length == 0) ? "" : (value.length > 20)
                        ? "Name must be less than 20 characters long!"
                        : "";
                break;
            case "email":
                errors.email = validEmailRegex.test(value)
                    ? ""
                    : "Email is not valid!";
                break;
            case "phoneNumber":
                errors.phoneNumber =
                    value.length < 10 || value.length > 10
                        ? "Phone number must be  10 digits "
                        : "";
                break;
            case "password":
                errors.password =
                    value.length < 6 ? "Password must be at least 6 characters" : "";
                break;
            default:
                break;
        }
        setError({ ...errors });
        setState((st: any) => ({ ...st, [name]: value }));
    };




    const handleRegister = () => {
        const validateForm = (error: any) => {
            let valid = true;
            Object.values(error).forEach((val: any) => val.length > 0 && (valid = false));
            return valid;
        };

        console.log("eroor", error)
        if (validateForm(error)) {
            checkValidity();
        } else {
            console.log("Failed to Register")
        }

    };

    function checkValidity() {
        if (!Object.keys(state).every((k) => state[k] !== "")) {
            setErrorText("Fields Should not be empty")
            setIsError(true)

        }
        else {
            axios.post("http://192.168.20.110:8000/api/auth/register", state)
                .then((res) => {
                    console.log(res)
                }).
                catch(error => console.log(error))



        }

    }


    return (
        <>
            <Snackbar
                style={styles.snackbar}
                visible={isError}
                onDismiss={() => setIsError(false)}
                action={{
                    label: "close",
                    onPress: () => {
                        setIsError(false)
                    },
                }}
            >
                <Text style={{ fontSize: 13 }}>{errorText}</Text>
            </Snackbar>

            <View style={styles.container}>

                <View style={styles.radioContainer}>
                    <View style={styles.radio}>
                        <RadioButton
                            color="darkblue"
                            value="mess"
                            status={checked == 'mess' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('mess')}
                        />
                        <Text style={styles.radioText}>Mess</Text>
                    </View>
                    <View style={styles.radio}>
                        <RadioButton
                            color="darkblue"
                            value="user"
                            status={checked == 'user' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('user')}
                        />

                        <Text style={styles.radioText}>User</Text>
                    </View>
                </View>
                <View style={styles.input}>
                    <FontAwesome name="user" color="black" size={width / 22} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                        autoCompleteType="off"
                        defaultValue={state['name']}
                        onChangeText={(text: any) => handleChange('name', text)}

                    />
                </View>
                <View>
                    <Text style={styles.error}>
                        {error.name}
                    </Text>

                </View>



                <View style={styles.input}>
                    <FontAwesome name="envelope" color="black" size={width / 22} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                        autoCompleteType="off"
                        keyboardType="email-address"
                        defaultValue={state['email']}
                        onChangeText={(text: any) => handleChange('email', text)}
                    />
                </View>

                <View>
                    <Text style={styles.error}>
                        {error.email}
                    </Text>

                </View>

                <View style={styles.input}>
                    <FontAwesome name="lock" color="black" size={width / 22} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                        autoCompleteType="off"
                        secureTextEntry={!isPasswordVisible}
                        defaultValue={state['password']}
                        onChangeText={(text: any) => handleChange('password', text)}

                    />
                    {
                        isPasswordVisible ?
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <FontAwesome name="eye" color="black" size={width / 22} style={styles.eye} />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                <FontAwesome name="eye-slash" color="black" size={width / 22} style={styles.eye} />
                            </TouchableOpacity>
                    }
                </View>

                <View>
                    <Text style={styles.error}>
                        {error.password}
                    </Text>

                </View>


                <View style={styles.input}>
                    <FontAwesome name="phone" color="black" size={width / 22} style={styles.searchIcon} />
                    <TextInput
                        placeholder="Mobile"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={styles.textInput}
                        autoCompleteType="off"
                        keyboardType="phone-pad"
                        defaultValue={state['phoneNumber']}
                        onChangeText={(text: any) => handleChange('phoneNumber', text)}

                    />
                </View>
                <View>
                    <Text style={styles.error}>
                        {error.phoneNumber}
                    </Text>

                </View>

                <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                    <LinearGradient colors={['#FC575E', '#F7B42C']} style={styles.searchIcon1}>
                        <FontAwesome name="arrow-right" color="white" size={width / 20} />
                    </LinearGradient>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>or create account using social media</Text>
                    <View style={styles.row}>

                        <View style={[styles.icon, { backgroundColor: "#314266" }]}>
                            <FontAwesome name="facebook-f" color="white" size={width / 25} />
                        </View>


                        <View style={[styles.icon1, { backgroundColor: "#40BCC8" }]}>
                            <FontAwesome name="twitter" color="white" size={width / 25} />
                        </View>


                        <View style={[styles.icon2, { backgroundColor: "#FB5F5E" }]}>
                            <FontAwesome name="google-plus" color="white" size={width / 25} />
                        </View>
                    </View>
                </View>


            </View>
        </>

    )
}

export default Signup
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },

    input: {
        padding: 5,
        paddingLeft: 10,
        borderRadius: 80,
        borderWidth: 1,
        borderColor: "lightgrey",
        display: "flex",
        flexDirection: "row",
        shadowColor: '#000',
        shadowOffset: { width: 50, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        width: width - 70,
        marginVertical: height / 100

    },
    searchIcon: {
        paddingRight: width / 20,
        top: 5
    },

    searchIcon1: {
        padding: width / 60,
        paddingHorizontal: width / 30,
        borderRadius: 15,

    },
    button: {
        display: "flex",
        flexDirection: "row",
        left: width / 4
    }, buttonText: {
        color: "black",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: width / 17,
        paddingRight: width / 30
    },
    textInput: {
        width: width / 2 + 50,
        color: "black",
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: width / 35
    },

    eye: {
        paddingRight: width / 20,
        marginTop: 5
    },
    row: {

        display: "flex",
        flexDirection: "row",
    },
    footer: {
        marginTop: height / 25,
        display: "flex",
        flexDirection: "column"
    },
    icon: {
        marginHorizontal: width / 15,
        borderRadius: 22,
        backgroundColor: "red",
        padding: width / 40,
        paddingHorizontal: width / 30
    },
    icon1: {
        marginHorizontal: width / 15,
        borderRadius: 22,
        backgroundColor: "red",
        padding: width / 40,
        paddingHorizontal: width / 40
    },
    icon2: {
        marginHorizontal: width / 15,
        borderRadius: 22,
        backgroundColor: "red",
        padding: width / 45,
        paddingHorizontal: width / 45
    },
    footerText: {
        fontFamily: "monospace",
        fontWeight: "bold",
        fontSize: width / 30,
        marginBottom: height / 40
    },
    radioContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    radio: {
        display: "flex",
        flexDirection: "row",
        marginLeft: width / 10,
        marginRight: width / 10
    },

    radioText: {
        marginTop: height / 100
    },
    snackbar: {
        backgroundColor: "red",
        borderRadius: 20,
        fontSize: 10
    },

    error: {
        color: "red",
        fontSize: 10,
        position: "relative",
        top: -5,
        left: -10
    },
})
