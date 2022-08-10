import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../core/theme";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";
import { pickImage, askForPermission, uploadImage } from "../utils";
import { signUp } from "../firebase";
import { auth, db } from "../firebase";
import { doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";

export default function RegisterScreen({ navigation }) {
  const [displayName, setDisplayName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    (async () => {
      const status = await askForPermission();
      setPermissionStatus(status);
    })();
  }, []);

  async function onSignUpPressed() {
    const displayNameError = nameValidator(displayName.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || displayNameError) {
      setDisplayName({ ...setDisplayName, error: displayNameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });

      return;
    }
    Keyboard.dismiss();

    // check with backend API or with some static data
    console.log(email.value, password.value);
    await signUp(email.value, password.value);

    const user = auth.currentUser;
    let photoURL;
    if (selectedImage) {
      const url = await uploadImage(
        selectedImage,
        `images/${user.uid}`,
        "profilePicture"
      );
      photoURL = url;
    }

    let name = displayName.value;

    const userData = {
      displayName: name,
      email: user.email,
    };
    if (photoURL) {
      userData.photoURL = photoURL;
    }
    Alert.alert(
      "Success!",
      "Your account has been created",
      [
        {
          text: "great!",
          onPress: () => {
            console.log("Account Created!");
          },
        },
      ],
      { cancelable: false }
    );
    await Promise.all([
      updateProfile(user, userData),
      setDoc(doc(db, "users", user.uid), { ...userData, uid: user.uid }),
    ]);
  }

  async function handleProfilePicture() {
    const result = await pickImage();
    if (!result.cancelled) {
      setSelectedImage(result.uri);
      console.log(result);
    }
  }

  return (
    <Background>
      <BackButton goBack={() => navigation.goBack()} />
      <Logo />
      <Header>Create Account</Header>
      <TouchableOpacity
        onPress={handleProfilePicture}
        style={{
          marginTop: 10,
          borderRadius: 120,
          width: 80,
          height: 80,
          backgroundColor: "#198ace",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!selectedImage ? (
          <MaterialCommunityIcons
            name="camera-plus"
            color="white"
            size={45}
            style={{ paddingBottom: 5 }}
          />
        ) : (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: "100%", height: "100%", borderRadius: 120 }}
          />
        )}
      </TouchableOpacity>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={displayName.value}
        onChangeText={(text) => setDisplayName({ value: text, error: "" })}
        error={!!displayName.error}
        errorText={displayName.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: "#198ace",
  },
});
