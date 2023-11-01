import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../slices/basketSlice";
const CartScreen = () => {
  const navigation = useNavigation();
  const [groupedItems, setGroupedItems] = useState({});
  const restaurant = useSelector(selectRestaurant);
  const basketItems = useSelector(selectBasketItems);
  const deliveryFee = 2;
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch();
  useEffect(() => {
    const items = basketItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [basketItems]);

  return (
    <View className="flex-1 bg-white">
      <View className="relative py-4 shadow-lg">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-3 rounded-full absolute z-50 top-4 left-4"
          style={{
            backgroundColor: themeColors.bgColor(0.7),
          }}>
          <Icon.ArrowLeft strokeWidth={2.5} color={"white"} />
        </TouchableOpacity>
        <View className="items-center">
          <Text className="font-bold text-xl">Your cart</Text>
          <Text className="text-gray-500">Burgerdinho</Text>
        </View>
      </View>
      <View
        className="flex-row items-center px-4"
        style={{
          backgroundColor: themeColors.bgColor(0.4),
        }}>
        <Image
          source={require("../../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 text-lg px-4">Deliver in 20 - 30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="pt-5 bg-white">
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center mx-4 mb-4 rounded-3xl py-2 px-4 shadow-lg bg-white space-x-3">
              <Text style={{ color: themeColors.text }} className="font-bold">
                {items.length} x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-semibold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: dish.id }))}
                className="rounded-full p-1"
                style={{
                  backgroundColor: themeColors.bgColor(1),
                }}>
                <Icon.Minus color={"white"} strokeWidth={2} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        className="p-6 px-8 rounded-t-3xl space-y-4"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${basketTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Total</Text>
          <Text className="text-gray-700 font-extrabold">
            ${basketTotal + deliveryFee}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="p-3 rounded-full"
            style={{
              backgroundColor: themeColors.bgColor(1),
            }}>
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
