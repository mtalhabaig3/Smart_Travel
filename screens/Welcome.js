import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function Welcome({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome to Smart Travel! </Header>
      <Button
        mode="contained"
        style={{
          backgroundColor: "#198ace",
        }}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Sign Up
      </Button>
    </Background>
  );
}
