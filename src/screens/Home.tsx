import { StyleSheet, View, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Wizard from "../components/section/Wizard";
import { COLORS } from "../constants/colors";
import { useRef } from "react";

function Home() {
  return (
    <LinearGradient
      colors={[COLORS.background_light, COLORS.background_blue]}
      locations={[0.3, 0.95]}
      start={[-1.5, 0.75]}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoWrap}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <Wizard/>
      </SafeAreaView>
    </LinearGradient>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoWrap: {
    justifyContent: "center",
    width: "90%",
    alignItems: "center",
    height: 60,
  },
  logo: {
    width: "100%",
    height: 24,
    resizeMode: "contain",
  },
  background: {
    flex: 1,
  },
});
