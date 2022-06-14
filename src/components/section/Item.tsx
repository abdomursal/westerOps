import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ItemPropType } from "../../types/ItemPropType";
import CheckBox from "../ui/CheckBox";
import MenuButton from "../ui/MenuButton";

const Item = ({ setIsOpenMenu, item, setSelectedTask }: ItemPropType) => {
  const menuToggle = () => {
    setSelectedTask(item);
    setIsOpenMenu(true);
  };

  return (
    <View style={styles.container}>
      <CheckBox item={item} />
      <Text style={styles.itemText}>{item?.description}</Text>
      <MenuButton onPress={() => menuToggle()} />
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  itemText: {
    width: "75%",
    fontSize: 18,
  },
});
