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

export default function SigninScreen({navigation}) {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Image
        source={require("../../assets/empty-state.png")}
        style={styles.image}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        Never forget your notes
      </Text>
      <View style={styles.form}>
       <Input placeholder="Email address" />
       <Input placeholder="Password" secureTextEntry />
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
          title={"Login"}
          customStyles={{ alignSelf: "center", marginBottom: 60 }}
        />
        <Pressable onPress={()=>{navigation.navigate('Signup')}}>
          <Text>
            Don't have an account?{" "}
            <Text
              style={{ fontWeight: "bold", color: "green", marginLeft: 10 }}
            >
              Sign up
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
});
