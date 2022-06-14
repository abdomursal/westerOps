import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { InputFieldPropType } from "../../types/InputFieldProptype";

const InputField = ({
  placeholder,
  setDescription,
  selectedTask,
  setSelectedTask,
}: any) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        style={styles.input}
        value={!selectedTask ? null : selectedTask.description}
        onChangeText={
          selectedTask
            ? (e) =>
                setSelectedTask((state: any) => {
                  return { ...state, description: e };
                })
            : setDescription
        }
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,
    borderWidth: 1.5,
    borderColor: COLORS.gray,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderRadius: 3,
  },
  input: {
    fontSize: 18,
    width: "100%",
    height: "100%",
  },
});
