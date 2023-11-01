import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import DishRow from "../components/dishRow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
const RestaurantScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({ ...item }));
    }
  }, []);

  return (
    <View className="">
      <StatusBar barStyle={"light-content"} />
      <CartIcon />
      <ScrollView className="">
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-3 rounded-full absolute bg-gray-50 top-14 left-4 shadow">
            <Icon.ArrowLeft color={themeColors.bgColor(1)} strokeWidth={3} />
          </TouchableOpacity>
        </View>
        <View
          className="bg-white -mt-12 pt-6"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
          <View className="px-5">
            <Text className="font-bold text-3xl text-neutral-700">
              {item.name}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <Image
                className="h-4 w-4"
                source={require("../../assets/images/fullStar.png")}
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  ({item.reviews} review) -{" "}
                  <Text className="font-bold">{item.category}</Text>
                </Text>
              </Text>
              <Icon.MapPin color="gray" width={"15"} height={"15"} />
              <Text className="text-gray-700 text-xs">
                Nearby - {item.address}
              </Text>
            </View>
            <Text className="my-2 font-medium text-neutral-600">
              {item.description}
            </Text>
          </View>
        </View>
        <View className="pb-36">
          <Text className="text-2xl font-bold px-4 py-4">Dishes</Text>
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={dish} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
