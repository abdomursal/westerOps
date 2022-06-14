import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";
import Icon from "./Icon";
import { ButtonPropType } from "../../types/ButtonPropType";

const Button = ({
  title,
  addButton,
  fontColor = COLORS.white,
  backgroundColor = COLORS.primary,
  onPress,
  disabled,
}: ButtonPropType) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        {
          justifyContent: addButton ? "space-between" : "center",
          backgroundColor: backgroundColor,
          opacity:disabled?0.6:1
        },
      ]}
    >
      {addButton && (
        <Icon
          source={require("../../../assets/add_icon.png")}
          width={18}
          height={14}
        />
      )}
      <Text
        style={[
          styles.title,
          { textAlign: addButton ? "left" : "center", color: fontColor },
        ]}
      >
        {title}
      </Text>
      {addButton && (
        <Icon
          source={require("../../../assets/arrow_icon.png")}
          width={15}
          height={15}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("screen").height / 15,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 4,
    paddingHorizontal: 20,
    marginVertical:10
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    width: "75%",
    fontWeight: "400",
  },
});
