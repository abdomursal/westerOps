import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { completeTask } from "../../store/taskReducer";
import { CheckBoxPropType } from "../../types/CheckBoxPropType";
import Icon from "./Icon";

const CheckBox = ({ item }: CheckBoxPropType) => {
  const dispatch = useAppDispatch();
  const completedTasks = useAppSelector((state) => state.completedTasks);
  const isCompleted = completedTasks.find((id) => id == item?.id);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { borderColor: isCompleted ? COLORS.primary : COLORS.gray },
      ]}
      onPress={() => dispatch(completeTask(item.id))}
    >
      {isCompleted && (
        <Icon
          source={require("../../../assets/check.png")}
          height={9}
          width={11}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    height: 24,
    width: 24,
    borderRadius: 6,
    borderColor: COLORS.gray,
    borderWidth: 1.5,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
