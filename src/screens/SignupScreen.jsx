import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const genderOptions = ["Male", "Female"];

export default function SignupScreen() {
  const [gender, setGender] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");

  const auth = getAuth();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.form}>
        <Input
          placeholder={"Email address"}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Input placeholder="Full Name" onChangeText={(text) => setName(text)} />
        <Input placeholder="Age" onChangeText={(text) => setAge(text)} />
        <View style={{ marginVertical: 20 }}>
          <Text>Select gender</Text>
        </View>
        {genderOptions.map((option) => (
          <Pressable
            onPress={() => setGender(option)}
            key={option}
            style={styles.radioContainer}
          >
            <View
              style={[
                styles.outerCircle,
                option === gender && styles.selectedOuterCircle,
              ]}
            >
              <View
                style={[
                  styles.innerCircle,
                  option === gender && styles.selectedInnerCircle,
                ]}
              ></View>
            </View>
            <Text style={styles.radioText}>{option}</Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 10,
          alignItems: "center",
        }}
      >
        <Button
          title={"Signup"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
          onPress={signup}
        />
        <Pressable>
          <Text>
            Already have an account?{" "}
            <Text
              style={{ fontWeight: "bold", color: "green", marginLeft: 10 }}
            >
              Sign in
            </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingHorizontal: 16,
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
  form: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOuterCircle: {
    borderColor: "orange",
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  selectedInnerCircle: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
  radioText: {
    marginLeft: 10,
  },
});
