import { StatusBar } from "expo-status-bar";
import logo from "./assets/savvy-logo-visualimpairmentfriendly.png";
import google from "./assets/Google-logo.png";
import Line from "./assets/Line83.png";
import facebook from "./assets/Facebook-logo.png";
import apple from "./assets/Apple-logo.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Image style={styles.Image} source={logo} />
        <View>
          <Text style={styles.textWellcome}> wellcome to savvy </Text>
          <Text style={styles.textDescription}>
            Create an account or log in to manage your appointments.
          </Text>
        </View>
        <View style={styles.ViewInput}>
          <Text
            style={{
              color: "#717E8F",
              fontSize: 14,
            }}
          >
            {" "}
            Email/Mobile Number{" "}
          </Text>
          <TextInput placeholder=" customer@gmail.com" style={styles.input} />
        </View>
        <View style={styles.ViewButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ContinueButton}>
            <Image source={Line} style={styles.line} />
            <Text
              style={{
                color: "#2D3748",
                fontSize: 14,
              }}
            >
              or continue with
            </Text>
            <Image source={Line} style={styles.line} />
          </TouchableOpacity>
          <View style={styles.SignUpOptions}>
            <Image source={apple} style={styles.apple} />
            <Image source={facebook} style={styles.facebook} />
            <Image source={google} style={styles.google} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#4CD1E5",
    alignItems: "center",
  },
  Image: {
    width: 123,
    height: 36,
    marginLeft: "30%",
  },
  loginBox: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 24,
    gap: 40,
    paddingRight: 24,
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "white",
    height: "70%",
  },
  textWellcome: {
    color: "#2D3748",
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "Mona Sans",
  },
  textDescription: {
    textAlign: "left",
    color: "#717E8F",
  },
  ViewInput: {
    flex: 1,
    gap: 3,
    marginBottom: 40,
  },
  ViewButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 4,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: "#0002",
  },
  button: {
    width: 250,
    paddingVertical: 12,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#0A95CF",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 14,
  },

  line: {
    width: 72,
  },
  ContinueButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  SignUpOptions: {
    flex: 1,
    flexDirection: "row",
    padding: 30,
    gap: 16,
  },
  google: {
    width: 23,
    height: 23,
  },
  apple: {
    width: 22,
    height: 22,
  },
  facebook: {
    width: 22,
    height: 22,
  },
});
