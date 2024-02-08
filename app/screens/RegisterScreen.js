import React , {useState} from "react";
import { View, StyleSheet, ImageBackground, Switch } from "react-native";
import Logo from "../components/Logo";
import * as Yup from "yup";
import colors from "../config/colors";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),

});

function RegisterScreen({navigation}) {
    const registerClicked = () => {
        navigation.navigate("App")
    };  

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ImageBackground
            blurRadius={30}
            style={styles.background}
            source={require("../assets/Welcome_Background.jpg")}>
            <Logo/>
            <Form
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <View style={styles.switchContainer}>
                    <AppText style={styles.switchLabel}>Are you Seller?</AppText>
                    <View style={styles.switch}>
                        <AppText style={styles.switchText}>No</AppText>
                        <Switch 
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#01A082' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            value={isEnabled}
                            onValueChange={toggleSwitch}
                        />
                        <AppText style={styles.switchText}>Yes</AppText>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <SubmitButton title="Register" 
                                buttonStyle={styles.button} 
                                buttonTextStyle={styles.buttonTextStyle}
                                onPress={registerClicked}
                                />
                </View>        
            </Form>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }, 
    button: {
        backgroundColor: colors.buttonSecondary,
        padding: 15,
        margin: 10,
        width: 300
    },
    buttonTextStyle: {
        fontSize: 18,
        color: colors.buttonTextSecondary
    },   
    switch:{
        alignItems:"center",
        flexDirection:"row",
        flex: 0.5,

    },
    switchLabel:{
        flex: 0.5,
        color:colors.white,
        fontWeight: "bold",
        fontSize:18,
        
    },
    switchText:{
        color:colors.white,
        
    },
    switchContainer: {
        flexDirection: "row",
        alignItems:"center",
        marginLeft: 5,
    }
});

export default RegisterScreen;
