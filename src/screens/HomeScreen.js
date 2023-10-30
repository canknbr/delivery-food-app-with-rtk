import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import Categories from "../components/categories";
import FeaturedRow from "../components/featuredRow";
import { featured } from "../constants";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center pb-2 px-4 space-x-2">
        <View className="flex-row flex-1 items-center rounded-full border border-gray-300 p-3">
          <Icon.Search height={"25"} width={"25"} stroke={"gray"} />
          <TextInput placeholder="Search" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height={"20"} width={"20"} stroke={"gray"} />
            <Text className="text-gray-600">Ankara</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: themeColors.bgColor(1),
          }}
          className="p-3 rounded-full bg-gray-300">
          <Icon.Sliders height={"20"} width={"20"} stroke={"white"} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <Categories />
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
