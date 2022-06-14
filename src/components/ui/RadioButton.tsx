import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { RadioPropType } from "../../types/RadioPropType";

const RadioButton = ({ checked, setChecked }: RadioPropType) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: checked ? COLORS.secondary : COLORS.gray },
      ]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <View style={styles.checked} />}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    height: "100%",
    width: "100%",
  },
});
