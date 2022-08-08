import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItemsWithId,
  addToBasket,
  removeFromBasket,
} from "../features/basketSlice";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const removeItemsFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <View className="bg-white border p-4 border-gray-200 ">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-600  font-bold mt-2">
            {"₹"}
            {price}
          </Text>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
      <View className="flex-row items-center space-x-2 pb-3 pt-3">
        <TouchableOpacity
          disabled={!items.length}
          onPress={removeItemsFromBasket}
        >
          <MinusCircleIcon
            color={items.length > 0 ? "#00CCBB" : "gray"}
            size={40}
          />
        </TouchableOpacity>
        <Text>{items.length}</Text>
        <TouchableOpacity onPress={addItemsToBasket}>
          <PlusCircleIcon color="#00CCBB" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishRow;
