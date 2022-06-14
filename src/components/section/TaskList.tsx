import { FlatList, View } from "react-native";
import React, { useRef } from "react";
import Item from "./Item";
import { TaskListPropType } from "../../types/TaskListPropType";

const TaskList = ({
  tasks,
  setIsOpenMenu,
  setSelectedTask,
}: TaskListPropType) => {
  const flatListRef = useRef<FlatList>(null);
  const generalTasks = tasks?.filter((task) => !task.featured);
  const featureTasks = tasks?.filter((task) => task.featured);
  const HEIGHT_LIST = featureTasks.length == 0 ? "80%" : "60%";

  return (
    <View style={{ height: HEIGHT_LIST }}>
      <FlatList
        ref={flatListRef}
        data={generalTasks}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Item
            item={item}
            setIsOpenMenu={setIsOpenMenu}
            setSelectedTask={setSelectedTask}
          />
        )}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        onLayout={() => flatListRef.current?.scrollToEnd()}
      />
    </View>
  );
};

export default TaskList;
