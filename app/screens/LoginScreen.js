import React from "react";
import { StyleSheet, ImageBackground, View,} from "react-native";
import * as Yup from "yup";
import colors from "../config/colors";
import Logo from "../components/Logo";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({navigation}) {
  return (
        <ImageBackground
            blurRadius={30}
            style={styles.background}
            source={require("../assets/Welcome_Background.jpg")}
        >
            <Logo/>
            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <View style={styles.buttonsContainer}>
                    <SubmitButton title="Login" 
                                buttonStyle={styles.button} 
                                buttonTextStyle={styles.buttonTextStyle}
                                onPress={() => navigation.navigate("App")}  
                                />
                </View>
            </AppForm>
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
  }
});

export default LoginScreen;
