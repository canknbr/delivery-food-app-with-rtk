import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { featured } from "../constants";
import { themeColors } from "../theme";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../slices/restaurantSlice";
import { emptyBasket } from "../slices/basketSlice";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const dispatch = useDispatch();
  const cancelOrder = () => {
    navigation.navigate("Home");
    dispatch(emptyBasket());
  };
  return (
    <View className="flex-1">
      <StatusBar barStyle={"dark-content"} />
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="relative bg-white rounded-t-3xl">
        <View className="flex-row justify-between px-5 py-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl text-gray-700 font-extrabold">
              20 - 30 minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Your order is own its way!
            </Text>
          </View>
          <Image
            source={require("../../assets/images/bikeGuy2.gif")}
            className="h-24 w-24"
          />
        </View>
        <View
          className="p-2 flex-row justify-between items-center my-5 mx-2 rounded-full"
          style={{
            backgroundColor: themeColors.bgColor(0.7),
          }}>
          <View className="p-1 rounded-full">
            <Image
              source={require("../../assets/images/can.jpeg")}
              className="rounded-full w-16 h-16"
            />
          </View>
          <View className="ml-3 flex-1">
            <Text className="color-white text-xl font-bold">Can Kanbur</Text>
            <Text className="color-white text-base font-bold">Your Rider</Text>
          </View>
          <View className="flex-row items-center space-x-4 mr-3">
            <TouchableOpacity className="p-4 rounded-full bg-white">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={2}
                strokeWidth={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              className="p-4 rounded-full bg-white">
              <Icon.X stroke={"red"} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
