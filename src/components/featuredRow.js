import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { featured } from "../constants";
import { themeColors } from "../theme";
import RestaurantCard from "../components/restaurantCard";
const FeaturedRow = ({ title, restaurants, description }) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: themeColors.text,
            }}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5">
        {restaurants.map((item, index) => {
          return <RestaurantCard key={index} item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
