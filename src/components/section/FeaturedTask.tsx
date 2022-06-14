import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { COLORS } from "../../constants/colors";
import Icon from "../ui/Icon";
import Item from "./Item";
import { useAppSelector } from "../../store/store";
import { FeaturedTaskProps } from "../../types/FeaturedTaskProps";

const FeaturedTask = ({
  setSelectedTask,
  setIsOpenMenu,
  selectedTask,
}: FeaturedTaskProps) => {
  const flatListRef = useRef<FlatList>(null);
  const featuredTasks = useAppSelector((state) => state.tasks);
  const isFeatured = featuredTasks?.filter((task) => task?.featured);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrap}>
        <Icon
          source={require("../../../assets/pin_icon.png")}
          width={20}
          height={20}
        />
        <Text style={styles.headerText}>Pin on the top</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={isFeatured}
        renderItem={({ item }) => (
          <Item
            item={item}
            key={item.id}
            setSelectedTask={setSelectedTask}
            setIsOpenMenu={setIsOpenMenu}
            selectedTask={selectedTask}
          />
        )}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
        onLayout={() => flatListRef.current?.scrollToEnd()}
      />
    </View>
  );
};

export default FeaturedTask;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.light_gray,
    alignSelf: "center",
    maxHeight: "30%",
    marginBottom: 2,
  },
  headerWrap: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.secondary,
    marginLeft: 8,
  },
});
