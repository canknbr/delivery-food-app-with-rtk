import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
const DishRow = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center bg-white rounded-3xl p-3 mx-4 mb-3 shadow-xl">
      <Image source={item.image} className="rounded-2xl w-24 h-24" />
      <View className="flex flex-1 space-y-1 pl-3">
        <Text className="text-xl text-neutral-700">{item.name}</Text>
        <Text className="text-sm text-neutral-700">{item.description}</Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm text-neutral-700">${item.price}</Text>
          <View className="flex-row items-center space-x-2">
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Icon.Minus
                width={"20"}
                height={"20"}
                strokeWidth={2}
                color={"white"}
              />
            </TouchableOpacity>
            <Text className="font-bold text-xl">100</Text>
            <TouchableOpacity
              className="p-1 rounded-full"
              style={{
                backgroundColor: themeColors.bgColor(1),
              }}>
              <Icon.Plus
                width={"20"}
                height={"20"}
                strokeWidth={2}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
