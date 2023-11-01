import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../slices/basketSlice";
const CartIcon = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(selectBasketItems);
  const cartTotal = useSelector(selectBasketTotal);
  if (!cartItems.length) return;

  return (
    <View className="absolute bottom-6  rounded-full z-50  w-full">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        className="mx-6 flex-row justify-between items-center p-4 py-3 rounded-full shadow-xl"
        style={{
          backgroundColor: themeColors.bgColor(1),
        }}>
        <View
          className="p-2 px-4 rounded-full"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
          }}>
          <Text className="text-white font-bold text-lg">
            {cartItems.length}
          </Text>
        </View>
        <Text className=" flex-1 items-center text-center text-xl text-white font-bold">
          View Cart
        </Text>
        <Text className="text-white font-bold text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartIcon;
