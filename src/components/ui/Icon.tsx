import React from "react";
import { View, Image } from "react-native";
import { IconPropType } from "../../types/IconPropType";

const Icon = ({ height, width, source }: IconPropType) => {
  return (
    <View>
      <Image source={source} style={{ height: height, width: width }} />
    </View>
  );
};

export default Icon;
