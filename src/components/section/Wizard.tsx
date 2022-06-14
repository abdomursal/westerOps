import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants/colors";
import Button from "../ui/Button";
import FeaturedTask from "./FeaturedTask";
import ModalPopup from "./ModalPopup";
import MenuPopup from "./MenuPopup";
import TaskList from "./TaskList";
import { useAppSelector } from "../../store/store";
import { ItemEntitiesPropType } from "../../types/ItemPropType";

const Wizard = () => {
  const [modalVisible, setModalVisible] = useState<boolean | undefined>(false);
  const [menuVisible, setMenuVisible] = useState<boolean | undefined>(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState<
    boolean | undefined
  >(false);
  const [selectedTask, setSelectedTask] = useState<
    ItemEntitiesPropType | undefined
  >();
  const tasks = useAppSelector((state) => state.tasks);

  return (
    <>
      {(modalVisible || updateModalIsOpen) && (
        <View style={styles.backgroundModalFade} />
      )}

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleWrap}>
            <Text style={styles.headerTitle}>To Do List</Text>
          </View>
        </View>
        <View style={styles.contentWrap}>
          <FeaturedTask
            setSelectedTask={setSelectedTask}
            setIsOpenMenu={setMenuVisible}
            selectedTask={selectedTask}
          />
          <TaskList
            tasks={tasks}
            setIsOpenMenu={setMenuVisible}
            setSelectedTask={setSelectedTask}
          />
        </View>
        <MenuPopup
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
          setUpdateModalIsOpen={setUpdateModalIsOpen}
          updateModalIsOpen={updateModalIsOpen}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
        <View style={styles.buttonWrap}>
          <Button
            onPress={() => setModalVisible(true)}
            title="Add a task"
            addButton={true}
          />
        </View>
      </View>

      {modalVisible && (
        <ModalPopup
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          setSelectedTask={setSelectedTask}
          type={"Add"}
        />
      )}
    </>
  );
};

export default Wizard;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 1.25,
    width: Dimensions.get("screen").width / 1.1,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  headerContainer: {
    height: "9%",
    width: "100%",
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.light_gray,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitleWrap: {
    height: "100%",
    borderBottomWidth: 4,
    borderBottomColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
  },
  headerTitle: {
    color: COLORS.dark_blue,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  contentWrap: {
    paddingHorizontal: 15,
  },
  buttonWrap: {
    position: "absolute",
    bottom: 5,
    width: "95%",
    alignSelf: "center",
  },
  backgroundModalFade: {
    position: "absolute",
    flex: 1,
    backgroundColor: "black",
    opacity: 0.4,
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    zIndex: 1,
  },
});
