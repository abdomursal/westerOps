import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { useAppDispatch } from "../../store/store";
import { addTask, updateTask } from "../../store/taskReducer";
import RadioButton from "../ui/RadioButton";
import { ModalPropType } from "../../types/ModalPopupProps";

const ModalPopup = ({
  setModalVisible,
  modalVisible,
  type,
  selectedTask,
  setSelectedTask,
}: ModalPropType) => {
  const [featured, setFeatured] = useState<boolean | undefined>(false);
  const [description, setDescription] = useState<string>("");

  const [newTask, setNewTask] = useState({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!modalVisible) {
      resetTask();
    }
  }, [modalVisible]);

  useEffect(() => {
    if (selectedTask) {
      setFeatured(selectedTask.featured);
    }
  }, []);

  const resetTask = () => {
    setDescription("");
    setFeatured(false);
    setModalVisible(false);
    setNewTask({});
    setSelectedTask();
  };

  const handleSubmit = () => {
    if (!!selectedTask) {
      dispatch(
        updateTask({
          id: selectedTask?.id,
          description: selectedTask?.description,
          featured: featured,
        })
      );
    } else {
      dispatch(
        addTask({
          id: Math.floor(Math.random() * 100),
          description: description,
          featured: featured,
        })
      );
    }

    setModalVisible(false);
    // resetTask();
  };

  return (
    <Modal
      style={{ backgroundColor: "red" }}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleWrap}>
            <Icon
              source={require("../../../assets/add_secondary.png")}
              width={18}
              height={14}
            />
            <Text style={styles.headerText}>{type} a task</Text>
          </View>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
          >
            <Icon
              source={require("../../../assets/close_icon.png")}
              width={18}
              height={14}
              onPress={() => setModalVisible(false)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContent}>
          <View style={styles.inputWrap}>
            <InputField
              placeholder="Task description"
              setDescription={setDescription}
              newTask={newTask}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          </View>
          <View style={styles.pinOnTopWrap}>
            <Icon
              source={require("../../../assets/pin_icon.png")}
              width={20}
              height={20}
            />
            <Text style={styles.pinOnTopText}>Pin on the top</Text>
            <RadioButton checked={featured} setChecked={setFeatured} />
          </View>
        </View>
        <View style={styles.buttonsWrap}>
          <Button
            disabled={description || selectedTask?.description ? false : true}
            title="Save"
            onPress={() => handleSubmit()}
          />
          <Button
            title="Cancel"
            backgroundColor="transparent"
            fontColor={COLORS.primary}
            onPress={() => resetTask()}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({
  headerContainer: {
    height: "10%",
    width: "100%",
    borderBottomColor: COLORS.light_gray,
    borderBottomWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTitleWrap: {
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  modalView: {
    position: "absolute",
    backgroundColor: COLORS.white,
    height: "79%",
    bottom: 0,
    width: "100%",
    borderRadius: 15,
  },
  backgroundModalFade: {
    backgroundColor: "black",
    opacity: 0.3,
    height: "100%",
  },
  headerText: {
    color: COLORS.secondary,
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 15,
  },
  modalContent: {
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
  },
  inputWrap: {
    width: "100%",
    height: "37%",
    justifyContent: "center",
  },
  pinOnTopWrap: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  pinOnTopText: {
    fontSize: 15,
    fontWeight: "400",
    width: "85%",
    color: COLORS.black,
    marginLeft: 8,
  },
  buttonsWrap: {
    width: "90%",
    position: "absolute",
    alignSelf: "center",
    bottom: 50,
  },
});
