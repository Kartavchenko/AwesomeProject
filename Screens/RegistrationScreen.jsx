import {
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState } from "react";

const initialValue = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [stateForm, setStateForm] = useState(initialValue);
  const [keyboardPadd, setKeyboardPadd] = useState(false);

  const submit = () => {
    setKeyboardPadd(false);
    Keyboard.dismiss();
    console.log(stateForm);
    setStateForm(initialValue);
  };
  return (
    <View style={{ ...style.container, marginBottom: keyboardPadd ? 20 : 0 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          value={stateForm.login}
          onChangeText={(value) => {
            setStateForm((prevState) => ({ ...prevState, login: value }));
          }}
          onFocus={() => {
            setKeyboardPadd(true);
          }}
          textAlign="center"
          placeholder="Login"
          style={style.input}
        />
        <TextInput
          value={stateForm.email}
          onChangeText={(value) => {
            setStateForm((prevState) => ({
              ...prevState,
              email: value,
            }));
          }}
          onFocus={() => {
            setKeyboardPadd(true);
          }}
          textAlign="center"
          placeholder="Email"
          style={style.input}
        />
        <TextInput
          value={stateForm.password}
          onChangeText={(value) => {
            setStateForm((prevState) => ({
              ...prevState,
              password: value,
            }));
          }}
          onFocus={() => {
            setKeyboardPadd(true);
          }}
          textAlign="center"
          secureTextEntry
          placeholder="Password"
          style={style.input}
        />
        <TouchableOpacity
          style={style.registationBtn}
          onPress={submit}
          activeOpacity={0.7}
        >
          <Text>Registration</Text>
        </TouchableOpacity>
        <View style={style.textLogin}>
          <Text>Have an account? Go to Login</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "flex-end",
  },
  input: {
    border: 1,
    borderRadius: 8,
    color: "black",
    backgroundColor: "#F6F6F6",
    height: 50,
    marginTop: 16,
  },
  registationBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    marginTop: 43,
  },
  textLogin: {
    justifyContent: "center",
    alignItems: "center",
  },
});
