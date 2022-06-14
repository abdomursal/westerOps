import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants/colors";
import Icon from "../ui/Icon";
import ModalPopup from "./ModalPopup";
import { useAppDispatch } from "../../store/store";
import { addTask, deleteTask } from "../../store/taskReducer";
import { MenuPropType } from "../../types/MenuPopupProps";

const MenuPopup = ({
  menuVisible,
  setMenuVisible,
  updateModalIsOpen,
  setUpdateModalIsOpen,
  selectedTask,
  setSelectedTask,
}: MenuPropType) => {
  const dispatch = useAppDispatch();

  const openModalHandle = () => {
    setMenuVisible(false);
    setUpdateModalIsOpen(true);
  };

  const menuProcessHandle = {
    pinTask: () => {
      dispatch(
        dispatch(
          addTask({
            id: selectedTask?.id,
            description: selectedTask?.description,
            featured: true,
          })
        )
      ),
        setMenuVisible(false);
    },
    updateTask: () => {
      openModalHandle();
    },
    deleteTask: () => {
      dispatch(deleteTask(selectedTask)), setMenuVisible(false);
    },
  };
  if (updateModalIsOpen) {
    return (
      <ModalPopup
        type={"Update"}
        modalVisible={updateModalIsOpen}
        setModalVisible={setUpdateModalIsOpen}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
    );
  }

  return (
    <Modal
      style={{ backgroundColor: "red" }}
      animationType="fade"
      transparent={true}
      visible={menuVisible}
      onRequestClose={() => {
        setMenuVisible(false);
      }}
    >
      <TouchableOpacity
        style={styles.backgroundModalFade}
        onPress={() => setMenuVisible(false)}
      />
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.itemWrap}
          onPress={() => menuProcessHandle.pinTask()}
        >
          <Icon
            source={require("../../../assets/pin.png")}
            width={20}
            height={20}
          />
          <Text style={styles.itemText}>Pin on the top</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemWrap}
          onPress={() => menuProcessHandle.updateTask()}
        >
          <Icon
            source={require("../../../assets/update_icon.png")}
            width={15}
            height={15}
          />
          <Text style={styles.itemText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemWrap}
          onPress={() => menuProcessHandle.deleteTask()}
        >
          <Icon
            source={require("../../../assets/delete_icon.png")}
            width={24}
            height={24}
          />
          <Text style={styles.itemText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MenuPopup;

const styles = StyleSheet.create({
  menuContainer: {
    position: "absolute",
    backgroundColor: COLORS.white,
    height: "30%",
    bottom: 0,
    width: "100%",
    borderRadius: 15,
    zIndex: 0,
  },
  backgroundModalFade: {
    backgroundColor: "black",
    opacity: 0.3,
    height: "100%",
  },
  itemWrap: {
    height: "30%",
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.light_gray,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  itemText: {
    fontSize: 16,
    color: COLORS.black,
    paddingLeft: 10,
  },
});
