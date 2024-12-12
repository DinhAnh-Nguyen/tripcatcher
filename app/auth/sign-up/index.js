// Sign Up page

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onCreateAccount = () => {
    if (
      !email ||
      !password ||
      fullName === undefined ||
      fullName.trim() === ""
    ) {
      ToastAndroid.show(
        "Please fill in all required fields",
        ToastAndroid.LONG
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, error.code);

        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show("Email already in use", ToastAndroid.LONG);
        }
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      {/* Sign Up form */}
      <Text>Create New Account</Text>

      <View>
        <Text>Full Name</Text>
        <TextInput
          placeholder="Enter Full Name"
          onChangeText={(value) => setFullName(value)}
        ></TextInput>
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(value) => setPassword(value)}
        ></TextInput>
      </View>

      {/* Create new account button */}
      <View>
        <Button
          onPress={onCreateAccount}
          title="Create new account"
          accessibilityLabel="Create New Account Button"
        />
      </View>

      {/* Sign in button */}
      {/* router.replace(): Let you return to Landing page instead of previous page */}
      <View>
        <Button
          onPress={() => router.replace("auth/sign-in")}
          title="Sign in"
          accessibilityLabel="Sign In Button"
        />
      </View>
    </View>
  );
}
