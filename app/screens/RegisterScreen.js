import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import Logo from "../components/Logo";
import * as Yup from "yup";
import colors from "../config/colors";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({navigation}) {
  const registerClicked = () => {
    navigation.navigate("App")
  };   
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
  container: {
    padding: 10,
  },
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

export default RegisterScreen;
